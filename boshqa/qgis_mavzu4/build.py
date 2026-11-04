# Videoni ovozga moslash: har slayd bo‘lagi ovozdagi bo‘lim uzunligiga cho‘ziladi/qisqaradi.
import subprocess, sys, json
V, A, OUT, B = sys.argv[1], sys.argv[2], sys.argv[3], json.loads(sys.argv[4])
VS = [0, 5.0, 55.0, 110.0, 170.0, 215.0, 220.0]          # video: sarlavha, 4 slayd, yakun
AUD = 171.52; TAIL = 4.0
AS = [0] + B + [AUD, AUD + TAIL]                          # audio chegaralari
F = "DejaVuSans-Bold"
fix = (f"drawbox=x=182:y=312:w=18:h=22:color=0x161b27:t=fill:enable='between(t,55,110)',"
       f"drawbox=x=161:y=442:w=20:h=22:color=0x161b27:t=fill:enable='between(t,55,110)',"
       f"drawbox=x=341:y=442:w=18:h=22:color=0x161b27:t=fill:enable='between(t,55,110)',"
       + ",".join(f"drawtext=font={F}:text='→':fontsize=24:fontcolor=0xEEF1F7:x={x}:y={y}:enable='between(t,55,110)'" for x, y in [(181, 315), (161, 445), (341, 445)]))
parts, labels = [], []
for i in range(6):
    f = (AS[i + 1] - AS[i]) / (VS[i + 1] - VS[i])
    parts.append(f"[f]trim={VS[i]}:{VS[i+1]},setpts=(PTS-STARTPTS)*{f:.6f}[v{i}]"); labels.append(f"[v{i}]")
fc = f"[0:v]{fix},fps=30,split=6" + "".join(f"[s{i}]" for i in range(6)) + ";" + ";".join(p.replace("[f]", f"[s{i}]") for i, p in enumerate(parts)) + ";" + "".join(labels) + f"concat=n=6:v=1:a=0,fps=30,fade=t=in:st=0:d=0.4,fade=t=out:st={AUD+TAIL-0.8}:d=0.8[v]"
fc += (f";[1:a]aformat=channel_layouts=stereo,aresample=48000,loudnorm=I=-16:TP=-1.5:LRA=9,aresample=48000,apad=whole_dur={AUD+TAIL}[vo];"
       f"[2:a]aresample=48000,volume=0.16,afade=t=in:d=1.5,afade=t=out:st={AUD+TAIL-2.5}:d=2.5[mu];"
       f"[vo]asplit[vo1][sc];[mu][sc]sidechaincompress=threshold=0.02:ratio=8:attack=30:release=500[md];[vo1][md]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.95[a]")
cmd = ["ffmpeg", "-y", "-v", "error", "-i", V, "-i", A, "-i", sys.argv[5], "-filter_complex", fc, "-map", "[v]", "-map", "[a]",
       "-c:v", "libx264", "-crf", "19", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", "-t", str(AUD + TAIL), OUT]
subprocess.run(cmd, check=True); print("ok", OUT)
