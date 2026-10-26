# W3Schools HTML — Clean-Room Reverse-Engineered Platform

[![Tests](https://img.shields.io/badge/tests-36%20passed-brightgreen.svg)](#testleri-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-blueviolet.svg)](#%C3%B6zellikler)
[![Clean Room PoC](https://img.shields.io/badge/methodology-clean--room%20REA-orange.svg)](#yasal-uyar%C4%B1--clean-room-beyan%C4%B1)

Bu proje, [morluto/rea](https://github.com/morluto/rea) (Reverse Engineer Anything) metodolojisi referans alınarak, [W3Schools](https://www.w3schools.com) web sitesinin **HTML** eğitim bölümünün sıfırdan **temiz oda (clean-room)** mimarisiyle yeniden inşa edilmiş halidir.

> ### ⚖️ Yasal Uyarı & Clean-Room Beyanı (Legal Disclaimer)
> Bu çalışma eğitim ve tersine mühendislik araştırma konsepti (PoC) olarak sıfırdan geliştirilmiştir. W3Schools veya Refsnes Data ile herhangi bir resmi bağı veya sponsorluğu yoktur. Kod tabanında orijinal telifli kaynak kod veya tescilli varlık bulunmaz; tüm içerik ve arayüz bağımsız açık kaynak pratikleriyle üretilmiştir. Proje hiçbir API anahtarı, gizli anahtar veya özel kimlik bilgisi içermez.

---

## 🚀 Öne Çıkan Özellikler

### 1. Sadece HTML Müfredatı (Strictly HTML Curriculum)
Kullanıcı gereksinimi doğrultusunda eğitim kataloğu CSS, JS, Python veya SQL derslerini dışlayarak **yalnızca HTML** konularına odaklanmıştır:
- **HTML Tutorial**: HTML Giriş, Editörler, Temel Yapı, Elementler, Nitelikler (Attributes), Başlıklar (Headings), Paragraflar, Stiller, Metin Biçimlendirme, Alıntılar, Yorumlar, Renkler, CSS Entegrasyonu, Bağlantılar (Links), Resimler (Images), Tablolar (Tables), Listeler (Lists), Blok ve Satır İçi (Block & Inline), Sınıflar & ID (Classes & ID), Iframes, JavaScript Entegrasyonu, Head & Metadata, Semantik Elementler.
- **HTML Forms**: Form elementleri, action/method nitelikleri, metin, şifre, email, radyo, onay kutuları vb. HTML5 girdi tipleri.
- **HTML Media & Graphics**: HTML5 Video, Audio, 2D Canvas ve SVG grafikleri.
- **HTML References**: Karakter kodlamaları, semboller ve HTML entity'leri.

### 2. Kapsamlı Etkileşimli Kod Yazma Ortamı (Interactive HTML Runner)
- **Ders İçi Canlı Editör (In-Lesson Live Runner):** Her dersin örnek kutusunda `View Code` ve `⚡ Live Editor` sekmeleri. Sayfadan ayrılmadan HTML kodunu düzenleyip anında sandboxed iframe içinde test etme imkânı.
- **Gelişmiş Tryit Editor Modalı:**
  - **Sürüklenebilir Bölücü (Draggable Resizer):** Kod alanı ve önizleme arasındaki dikey/yatay oran fareyle dinamik ayarlanabilir.
  - **Auto-Run:** Yazarken gecikmeli (debounced) otomatik canlı derleme seçeneği.
  - **Otomatik Kod Biçimlendirici (🪄 Format):** Dağınık HTML kodlarını standart girintilerle temizleme.
  - **Hızlı Etiket Çubuğu (Quick Tag Chips):** `<h1>`, `<p>`, `<a>`, `<img>`, `<table>`, `<ul>`, `<form>`, `<input>`, `<button>`, `<style>` etiketlerini imleç konumuna tek tıkla ekleme.
  - **Çoklu Satır Girintileme (Tab & Shift+Tab):** Seçili satırları topluca girintileme ve geri alma (unindent).
  - **Cihaz Önizleme Modları:** 💻 Masaüstü (%100), 📱 Tablet (768px) ve 📱 Mobil (375px) simülasyonları.
  - **Güvenli Konsol Çekmecesi:** DOM düğümleri ve nesneleri çökmeden yakalayan `console.log/error` arayüzü.
  - **Kısayollar:** `Ctrl + Enter` ile anında çalıştırma.
- **Bağımsız Tam Ekran Editör (`tryit.html`):** URL parametreleri (`tryit.html?lesson=html_tables`) ile ders kodlarını otomatik aktaran müstakil editör.

### 3. Etkileşimli Alıştırmalar (Interactive Exercises)
- Her dersin sonunda interaktif boşluk doldurma kod soruları.
- **Akıllı Cevap Doğrulama:** Tek/çift tırnak esnekliği (`getContext('2d')` vs `getContext("2d")`), `#` öneki esnekliği, `<br>` / `<br/>` ve `</p>` / `/p` kapanış varyantları.
- Çoklu kutularda `Enter` ile sıradaki kutuya geçiş ve anında doğrulama.
- Tamamlanan dersler `localStorage` üzerinde kaydedilerek menüde yeşil tik (✓) olarak işaretlenir.

### 4. Arayüz & Tasarım Sistemi
- Orijinal W3Schools `#04AA6D` marka teması, tipografi ve kart düzeni.
- SPA Geçmişi & Tarayıcı Geri/İleri (Hash Routing & History API).
- XSS korumalı canlı arama motoru.
- Açık/Koyu tema (Dark/Light mode) geçişi ve tercihin saklanması.
- Tam mobil ve masaüstü duyarlı (responsive) tasarım.

---

## 📂 Proje Dosya Yapısı

```
w3schools-html-rea/
├── .github/
│   └── workflows/
│       └── ci.yml                   # Otomatik test ve GitHub Pages yayını iş akışı
├── css/
│   └── w3schools.css                # W3Schools stil sistemi, temalar ve editör düzeni
├── js/
│   ├── lessons-data.js              # Kapsamlı HTML müfredatı ve alıştırmalar (82 ders)
│   ├── tryit.js                     # Etkileşimli editör, resizer, sandbox ve formatlayıcı
│   └── app.js                       # SPA router, arama, alıştırma kontrolü ve tema motoru
├── tests/
│   ├── test_curriculum.py           # Müfredat şeması, SSE ve HTTP sunucu birim testleri (16 test)
│   └── test_editor_and_exercises.py # Editör, resizer, XSS ve klavye testleri (20 test)
├── build_curriculum.py              # Müfredat veri üretici betiği
├── curriculum_data_*.py             # Kategori bazlı müfredat kaynak verileri
├── index.html                       # Ana portal, ders okuyucu ve Tryit modalı
├── tryit.html                       # Bağımsız tam ekran Tryit editörü
├── server.py                        # Yerel HTTP sunucusu ve REST API / SSE uç noktaları
├── .gitignore                       # Temiz Git yoksayma kuralları
├── LICENSE                          # MIT Lisansı
└── README.md                        # Proje ana dokümantasyonu
```

---

## 🛠️ Çalıştırma Talimatları

### 1. Yerel Sunucuyu Başlatma
Sıfır harici paket bağımlılığıyla doğrudan Python yerel sunucusunu çalıştırabilirsiniz:

```bash
python server.py 8080
```

Tarayıcınızdan açın:
- **Ana Portal:** [http://localhost:8080](http://localhost:8080)
- **Bağımsız Editör:** [http://localhost:8080/tryit.html](http://localhost:8080/tryit.html)
- **Sağlık Kontrolü:** [http://localhost:8080/api/health](http://localhost:8080/api/health)
- **Müfredat İstatistikleri:** [http://localhost:8080/api/curriculum-stats](http://localhost:8080/api/curriculum-stats)

*(İsterseniz sunucu çalıştırmadan da doğrudan `index.html` dosyasına çift tıklayarak tarayıcıda açabilirsiniz.)*

### 2. Birim Testlerini Çalıştırma
Tüm birim testleri Python standart kütüphanesi (`unittest`) ile koşar:

```bash
python -m unittest discover -s tests -v
```

---

## 📄 Lisans
Bu proje [MIT Lisansı](LICENSE) altında sunulmaktadır.
