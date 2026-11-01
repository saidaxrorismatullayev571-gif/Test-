# Lead-magnit: «Xodim kompetensiyalarini baholash shabloni» (Excel).
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import CellIsRule
from openpyxl.chart import BarChart, Reference
from openpyxl.chart.label import DataLabelList

NV, CY, AU, RD, GR, GY = '0A1330', '38BDF8', 'F5B942', 'EF4444', '22C55E', 'EEF2F8'
F = lambda c: PatternFill('solid', fgColor=c)
thin = Side(style='thin', color='C9D3E3'); B = Border(left=thin, right=thin, top=thin, bottom=thin)
W = Alignment(wrap_text=True, vertical='center')

BLOKS = [
 ('Axloqiy sifatlar', ['Kompaniyaga sodiqlik (sadoqat)', 'Rostgo‘ylik va halollik', 'Kompaniya qadriyatlarini bilishi va qo‘llashi', 'Jamoada ishlash, hamkasblarga yordam']),
 ('Shaxsiy sifatlar', ['Ishga munosabat', 'Samaradorlik', 'Mas’uliyatlilik', 'Ustuvorlikni belgilay olish', 'Adekvatlik (vaziyatga to‘g‘ri munosabat)', 'Mustaqillik', 'Boshqalar bilan muloqot']),
 ('Intellektual sifatlar', ['Fikrni aniq ifoda etish', 'Iqtisodiy fikrlash', 'Intellektual salohiyat', 'Karyera salohiyati']),
 ('Boshqaruv sifatlari', ['Yetakchilik', 'Ma’muriy javobgarlik', 'Muammolarni hal qila olish']),
 ('Tashabbuskorlik', ['Tashabbus ko‘rsatish', 'G‘oya bera olish va ishontirish', 'Yangi g‘oyalarni amalga oshirish']),
 ('Ijro va mehnat intizomi', ['Vazifalarni sifatli bajarish', 'Kompaniya hayotida ishtirok etish', 'Maqsadga intilish', 'Ish sifatini ta’minlash']),
]
MEZON = {
 'Kompaniyaga sodiqlik (sadoqat)': ('Kompaniya haqida salbiy gapiradi, birinchi taklifda ketishga tayyor.', 'Faqat o‘z ishini qiladi; qo‘shimcha ish, shanba yoki qiyin vaziyatda «bu mening ishim emas» deydi.', 'Kompaniya qiyin ahvolga tushsa, o‘z ishidan tashqari ham yordam beradi; boshqalar salbiy gapirsa, ijobiy tomonni ko‘rsatadi va jamoada sadoqatni oshiradi.'),
 'Rostgo‘ylik va halollik': ('Faktlarni yashiradi yoki buzadi.', 'Odatda rost gapiradi, lekin xatosini o‘zi aytmaydi.', 'Xatosini birinchi bo‘lib tan oladi, moliyaviy va hisobot masalalarida mutlaq shaffof.'),
 'Kompaniya qadriyatlarini bilishi va qo‘llashi': ('Qadriyatlarni bilmaydi.', 'Biladi, lekin har doim ham amal qilmaydi.', 'Qadriyatlar bo‘yicha qaror qabul qiladi va boshqalarga o‘rnak bo‘ladi.'),
 'Jamoada ishlash, hamkasblarga yordam': ('Yolg‘iz ishlaydi, bilimini bo‘lishmaydi.', 'So‘ralsa yordam beradi.', 'O‘zi taklif qilib yordam beradi, jamoa natijasini o‘zinikidan ustun qo‘yadi.'),
 'Ishga munosabat': ('Majburiyatdan ishlaydi, tez-tez norozi.', 'Ishini qiladi, lekin qiziqishi past.', 'Ishiga qiziqadi, yaxshilash yo‘llarini qidiradi.'),
 'Samaradorlik': ('Rejaning 70% idan kamini bajaradi.', 'Rejani bajaradi.', 'Rejadan muntazam oshiradi, kam resurs bilan ko‘p natija.'),
 'Mas’uliyatlilik': ('Muddatlarni buzadi, nazoratsiz ishlamaydi.', 'Asosiy vazifalarni vaqtida bajaradi, ba’zan eslatish kerak.', 'Natija uchun to‘liq javobgarlikni oladi, eslatishga hojat yo‘q.'),
 'Ustuvorlikni belgilay olish': ('Muhim va mayda ishni ajratmaydi.', 'Asosiy ustuvorlikni biladi, bosimda chalg‘iydi.', 'Har doim eng muhim ishdan boshlaydi, rahbarni ham to‘g‘ri yo‘naltiradi.'),
 'Adekvatlik (vaziyatga to‘g‘ri munosabat)': ('Tanqidga keskin, hissiy javob beradi.', 'Ko‘pincha xotirjam, ba’zan hissiyotga beriladi.', 'Har qanday vaziyatda xotirjam va mantiqiy.'),
 'Mustaqillik': ('Har qadamda ko‘rsatma kutadi.', 'Oddiy vazifalarni mustaqil bajaradi.', 'Murakkab vazifani ham o‘zi rejalab, oxiriga yetkazadi.'),
 'Boshqalar bilan muloqot': ('Nizolar chiqaradi.', 'Odatdagi muloqot yaxshi.', 'Murakkab suhbatlarni ham ijobiy hal qiladi, ishonch uyg‘otadi.'),
 'Fikrni aniq ifoda etish': ('Fikri tushunarsiz.', 'Tushunarli, lekin cho‘zib gapiradi.', 'Qisqa, aniq va ishonarli.'),
 'Iqtisodiy fikrlash': ('Xarajat va foydani o‘ylamaydi.', 'Asosiy xarajatlarni hisobga oladi.', 'Har bir qarorni pul va foyda tilida asoslaydi.'),
 'Intellektual salohiyat': ('Yangi narsani qiyin o‘zlashtiradi.', 'O‘rtacha tezlikda o‘rganadi.', 'Tez o‘rganadi va boshqalarga o‘rgatadi.'),
 'Karyera salohiyati': ('O‘sishga intilmaydi.', 'Imkon berilsa o‘sadi.', 'Yuqori lavozimga tayyor, rezerv kadr.'),
 'Yetakchilik': ('Boshqalarga ta’sir qilmaydi.', 'Kichik guruhni boshqara oladi.', 'Jamoani ilhomlantiradi va natijaga olib boradi.'),
 'Ma’muriy javobgarlik': ('Qoidalarni buzadi.', 'Qoidalarga amal qiladi.', 'Qoidalarni o‘zi nazorat qiladi va yaxshilaydi.'),
 'Muammolarni hal qila olish': ('Muammoni rahbarga «tashlaydi».', 'Oddiy muammolarni o‘zi hal qiladi.', 'Muammo bilan birga yechim ham olib keladi.'),
 'Tashabbus ko‘rsatish': ('Faqat aytilganini qiladi.', 'Ba’zan taklif beradi.', 'Muntazam yaxshilash takliflari beradi.'),
 'G‘oya bera olish va ishontirish': ('G‘oya bermaydi.', 'G‘oya beradi, lekin asoslay olmaydi.', 'G‘oyani raqam bilan asoslab, boshqalarni ishontiradi.'),
 'Yangi g‘oyalarni amalga oshirish': ('Yangilikka qarshilik qiladi.', 'Yangilikni qabul qiladi.', 'Yangilikni o‘zi joriy qiladi va oxiriga yetkazadi.'),
 'Vazifalarni sifatli bajarish': ('Ko‘p xato, qayta ishlash kerak.', 'Sifat qoniqarli.', 'Xatosiz, standartdan yuqori.'),
 'Kompaniya hayotida ishtirok etish': ('Tadbir va yig‘ilishlardan qochadi.', 'Chaqirilsa qatnashadi.', 'Faol, qarorlar qabul qilishda fikr bildiradi.'),
 'Maqsadga intilish': ('Qiyinchilikda taslim bo‘ladi.', 'Maqsadga intiladi, lekin turtki kerak.', 'Har qanday to‘siqda maqsadga yetadi.'),
 'Ish sifatini ta’minlash': ('Sifatni nazorat qilmaydi.', 'O‘z ishini tekshiradi.', 'Butun jarayon sifatini nazorat qiladi va yaxshilaydi.'),
}
NAMUNA = [3, 4, 4, 3, 4, 4, 3, 4, 3, 4, 3, 5, 4, 4, 4, 4, 5, 4, 4, 4, 3, 4, 4, 4, 3, 4]

wb = Workbook()
# ---------- Qo‘llanma ----------
q = wb.active; q.title = 'Qo‘llanma'; q.sheet_view.showGridLines = False
q.column_dimensions['A'].width = 3; q.column_dimensions['B'].width = 100
rows = [('XODIM KOMPETENSIYALARINI BAHOLASH SHABLONI', Font(bold=True, size=18, color=NV)),
 ('@tizimli.biznes · t.me/tizimli_biznes_uz', Font(size=11, color='5B6785')), ('', None),
 ('Nima uchun kerak?', Font(bold=True, size=13, color=NV)),
 ('Xodimni «ko‘ngilga qarab» emas, oldindan yozilgan mezonlar bo‘yicha baholash uchun. Xodim «nega menga 3?» deb so‘rasa, javob tayyor turadi.', None), ('', None),
 ('Qanday ishlatiladi (5 qadam)', Font(bold=True, size=13, color=NV)),
 ('1. «Mezonlar» varag‘ini o‘qing va kompaniyangizga moslang (1, 3 va 5 ball ta’riflari).', None),
 ('2. Kompaniyangiz uchun ENG MUHIM 4–5 ta kompetensiyani tanlang. Hammasini ishlatish shart emas.', None),
 ('3. «Baholash» varag‘ida har bir kompetensiyaga 1 dan 5 gacha ball qo‘ying. «Izoh / dalil» ustuniga aniq misol yozing.', None),
 ('4. Blok o‘rtachalari, jami ball va foiz avtomatik hisoblanadi. 4 dan past ball qizil bo‘lib chiqadi.', None),
 ('5. Qizil kompetensiyalarni pastdagi «Rivojlanish rejasi» jadvaliga ko‘chiring: nima qilinadi, qachongacha, kim javobgar.', None), ('', None),
 ('Shkala', Font(bold=True, size=13, color=NV)),
 ('1–3 ball: salbiy yoki o‘rtacha. Rivojlanish rejasiga kiritiladi.', None),
 ('4–5 ball: ijobiy. 4 va undan yuqori yaxshi ko‘rsatkich hisoblanadi.', None), ('', None),
 ('O‘rtacha ball = barcha ballar yig‘indisi ÷ baholangan kompetensiyalar soni.', Font(italic=True, size=11, color='26324F')),
 ('Natija (%) = jami ball ÷ (kompetensiyalar soni × 5). Masalan, 23 ÷ 30 = 76%.', Font(italic=True, size=11, color='26324F')), ('', None),
 ('«Namuna» varag‘ida to‘ldirilgan misol bor.', Font(bold=True, size=11, color='0F766E'))]
for i, (t, f) in enumerate(rows, 2):
    c = q.cell(row=i, column=2, value=t); c.alignment = W
    if f: c.font = f
    q.row_dimensions[i].height = 34 if len(t) > 95 else 20

# ---------- Mezonlar ----------
m = wb.create_sheet('Mezonlar'); m.sheet_view.showGridLines = False
for col, w in zip('ABCDE', [22, 34, 40, 40, 46]): m.column_dimensions[col].width = w
for j, h in enumerate(['Blok', 'Kompetensiya', '1 ball (past)', '3 ball (o‘rtacha)', '5 ball (a’lo)'], 1):
    c = m.cell(row=1, column=j, value=h); c.font = Font(bold=True, color='FFFFFF'); c.fill = F(NV); c.alignment = W; c.border = B
r = 2
for blok, ks in BLOKS:
    for k in ks:
        vals = [blok, k, *MEZON[k]]
        for j, v in enumerate(vals, 1):
            c = m.cell(row=r, column=j, value=v); c.alignment = W; c.border = B
            if j == 1: c.font = Font(bold=True, color=NV); c.fill = F(GY)
        m.row_dimensions[r].height = 62; r += 1
m.freeze_panes = 'C2'

def baholash(ws, demo=False):
    ws.sheet_view.showGridLines = False
    for col, w in zip('ABCDE', [24, 42, 12, 52, 26]): ws.column_dimensions[col].width = w
    ws['A1'] = 'XODIM KOMPETENSIYALARINI BAHOLASH'; ws['A1'].font = Font(bold=True, size=16, color=NV)
    info = [('Xodim (F.I.Sh.)', 'Aziz Karimov' if demo else ''), ('Lavozim', 'Sotuv menejeri' if demo else ''), ('Bo‘lim', 'Sotuv' if demo else ''),
            ('Baholovchi', 'Bo‘lim rahbari' if demo else ''), ('Baholash davri', '2026-yil, 2-yarim yillik' if demo else '')]
    for i, (k, v) in enumerate(info, 3):
        ws.cell(row=i, column=1, value=k).font = Font(bold=True, color='5B6785')
        c = ws.cell(row=i, column=2, value=v); c.border = Border(bottom=thin)
    hdr = 9
    for j, h in enumerate(['Blok', 'Kompetensiya', 'Ball (1–5)', 'Izoh / dalil (aniq misol)', 'Rivojlanish kerakmi?'], 1):
        c = ws.cell(row=hdr, column=j, value=h); c.font = Font(bold=True, color='FFFFFF'); c.fill = F(NV); c.alignment = W; c.border = B
    dv = DataValidation(type='whole', operator='between', formula1='1', formula2='5', showErrorMessage=True,
                        errorTitle='Noto‘g‘ri ball', error='Faqat 1 dan 5 gacha butun son kiriting.')
    ws.add_data_validation(dv)
    r = hdr + 1; blok_rows = []; score_cells = []; n = 0
    for blok, ks in BLOKS:
        start = r
        for k in ks:
            ws.cell(row=r, column=1, value=blok).font = Font(bold=True, color=NV)
            ws.cell(row=r, column=1).fill = F(GY)
            ws.cell(row=r, column=2, value=k)
            sc = ws.cell(row=r, column=3, value=NAMUNA[n] if demo else None); sc.alignment = Alignment(horizontal='center'); sc.font = Font(bold=True, size=12)
            dv.add(sc); score_cells.append(f'C{r}')
            if demo and NAMUNA[n] < 4 and k == 'Kompaniyaga sodiqlik (sadoqat)':
                ws.cell(row=r, column=4, value='Shanba kungi inventarizatsiyaga chiqmadi: «bu mening ishim emas».')
            ws.cell(row=r, column=5, value=f'=IF(AND(C{r}<>"",C{r}<4),"✔ Rejaga kiriting","")').font = Font(bold=True, color=RD)
            for j in range(1, 6): ws.cell(row=r, column=j).border = B; ws.cell(row=r, column=j).alignment = W
            ws.cell(row=r, column=3).alignment = Alignment(horizontal='center', vertical='center')
            r += 1; n += 1
        ws.cell(row=r, column=2, value=f'{blok}: o‘rtacha').font = Font(bold=True, italic=True, color=NV)
        c = ws.cell(row=r, column=3, value=f'=IFERROR(ROUND(AVERAGE(C{start}:C{r-1}),2),"")'); c.font = Font(bold=True, color=NV); c.alignment = Alignment(horizontal='center')
        for j in range(1, 6): ws.cell(row=r, column=j).fill = F('DCEBFF'); ws.cell(row=r, column=j).border = B
        blok_rows.append((blok, r)); r += 1
    lo, hi = hdr + 1, r - 1
    ws.conditional_formatting.add(f'C{lo}:C{hi}', CellIsRule(operator='between', formula=['1', '3.99'], fill=F('FDE2E2'), font=Font(bold=True, color='B91C1C')))
    ws.conditional_formatting.add(f'C{lo}:C{hi}', CellIsRule(operator='greaterThanOrEqual', formula=['4'], fill=F('DCFCE7'), font=Font(bold=True, color='15803D')))
    sc = ','.join(score_cells)
    r += 1
    res = [('Jami ball', f'=SUM({sc})'), ('Maksimal ball', f'=COUNT({sc})*5'), ('Natija (%)', f'=IFERROR(C{r}/C{r+1},"")'), ('Umumiy o‘rtacha', f'=IFERROR(ROUND(AVERAGE({sc}),2),"")')]
    for i, (k, f) in enumerate(res):
        ws.cell(row=r + i, column=2, value=k).font = Font(bold=True, size=12, color=NV)
        c = ws.cell(row=r + i, column=3, value=f); c.font = Font(bold=True, size=12, color=NV); c.alignment = Alignment(horizontal='center'); c.border = B
        if k == 'Natija (%)': c.number_format = '0%'
    # grafik uchun jadval
    g0 = r + 6
    ws.cell(row=g0, column=1, value='Blok').font = Font(bold=True); ws.cell(row=g0, column=2, value='O‘rtacha ball').font = Font(bold=True)
    for i, (blok, br) in enumerate(blok_rows, 1):
        ws.cell(row=g0 + i, column=1, value=blok); ws.cell(row=g0 + i, column=2, value=f'=IF(C{br}="",0,C{br})')
    ch = BarChart(); ch.type = 'bar'; ch.title = 'Bloklar bo‘yicha o‘rtacha ball (4 va undan yuqori — yaxshi)'
    ch.add_data(Reference(ws, min_col=2, min_row=g0, max_row=g0 + len(blok_rows)), titles_from_data=True)
    ch.set_categories(Reference(ws, min_col=1, min_row=g0 + 1, max_row=g0 + len(blok_rows)))
    ch.y_axis.scaling.min = 0; ch.y_axis.scaling.max = 5; ch.legend = None; ch.height = 8; ch.width = 18
    ch.dataLabels = DataLabelList(); ch.dataLabels.showVal = True
    ch.series[0].graphicalProperties.solidFill = '38BDF8'
    ws.add_chart(ch, f'D{r}')
    # rivojlanish rejasi
    p0 = g0 + len(blok_rows) + 3
    ws.cell(row=p0, column=1, value='RIVOJLANISH REJASI (qizil kompetensiyalar)').font = Font(bold=True, size=13, color=NV)
    for j, h in enumerate(['Kompetensiya', 'Nima qilinadi (aniq harakat)', 'Muddat', 'Natija qanday o‘lchanadi', 'Mas’ul'], 1):
        c = ws.cell(row=p0 + 1, column=j, value=h); c.font = Font(bold=True, color='FFFFFF'); c.fill = F(NV); c.border = B; c.alignment = W
    demo_plan = [('Kompaniyaga sodiqlik (sadoqat)', 'Kompaniya missiyasi bo‘yicha suhbat; ustoz biriktirish', '3 oy', 'Qo‘shimcha topshiriqlarda ishtirok', 'Bo‘lim rahbari'),
                 ('Mas’uliyatlilik', 'Haftalik reja-hisobot; muddatlarni CRM da kuzatish', '3 oy', 'Muddat buzilishi 0 ta', 'Xodimning o‘zi')]
    for i in range(5):
        for j in range(1, 6):
            c = ws.cell(row=p0 + 2 + i, column=j, value=(demo_plan[i][j - 1] if demo and i < len(demo_plan) else None)); c.border = B; c.alignment = W
        ws.row_dimensions[p0 + 2 + i].height = 30
    ws.cell(row=p0 + 8, column=1, value='Imzolar:  Xodim ____________     Baholovchi ____________     HR ____________').font = Font(color='5B6785')
    ws.freeze_panes = f'A{hdr + 1}'

baholash(wb.create_sheet('Baholash'))
baholash(wb.create_sheet('Namuna'), demo=True)
wb.move_sheet('Mezonlar', offset=2)
wb.save('Xodimni_baholash_shabloni_TizimliBiznes.xlsx'); print('ok')
