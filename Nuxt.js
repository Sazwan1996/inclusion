Berikut adalah versi Next.js (App Router) bagi halaman lesen dual MPL 3.0 (modified) + MIT. Kod ini ditulis sebagai komponen React dengan 'use client' kerana terdapat interaktiviti (butang salin). Anda boleh terus gunakannya dalam folder app/ (contohnya app/page.tsx atau app/lisensi/page.tsx).

```tsx
// app/page.tsx (atau mana‑mana laluan pilihan)
'use client';

import React, { useEffect } from 'react';

export default function LicensePage() {
  useEffect(() => {
    // Fungsi salin untuk butang – dijalankan di client
    const initCopyButtons = () => {
      document.querySelectorAll('.btn-copy').forEach((btn) => {
        btn.addEventListener('click', function (this: HTMLButtonElement) {
          const targetId = this.getAttribute('data-target');
          const targetElement = document.getElementById(targetId!);
          if (targetElement) {
            const textToCopy = targetElement.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
              const originalText = this.innerText;
              this.innerText = '✓ Disalin!';
              setTimeout(() => {
                this.innerText = originalText;
              }, 1500);
            });
          }
        });
      });
    };
    initCopyButtons();
  }, []);

  return (
    <div className="container">
      <h1>📜 MPL 3.0 (Modified) + MIT/X11 · Dual License Framework</h1>
      <div className="subhead">
        Hak Cipta 2026 · Muhamad Sazwan Bin Ismail (Sazwanismail / sazwan96)
      </div>

      <div className="warning">
        ⚠️ NOTA: Versi 3.0 ini adalah <strong>ubah suai tidak rasmi</strong> untuk tujuan demonstrasi. Versi rasmi MPL terkini ialah 2.0. Nama &quot;Mozilla Public License&quot; dan rujukan kepada Mozilla Foundation dikekalkan untuk kesinambungan, tetapi lesen ini tidak dikeluarkan atau disahkan oleh Mozilla.
      </div>

      {/* Lesen MPL 3.0 (rekaan) dan MIT/X11 */}
      <h2>🔹 Dual License Comparison</h2>
      <div className="license-grid">
        {/* MPL 3.0 */}
        <div className="license-card">
          <h3>🦊 MPL 3.0 (Mozilla Public License · Modified)</h3>
          <button className="btn-copy" data-target="mpl30-full">
            📋 Salin MPL 3.0
          </button>
          <div className="license-box" id="mpl30-full">
            {`Mozilla Public License Version 3.0 (modified)
==================================

1. Definitions
--------------
1.1. "Contributor" means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.
1.2. "Contributor Version" means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor's Contribution.
1.3. "Contribution" means Covered Software of a particular Contributor.
1.4. "Covered Software" means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.
1.5. "Incompatible With Secondary Licenses" means (a) that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or (b) that the Covered Software was made available under the terms of version 2.0 or earlier of the License, but not also under the terms of a Secondary License.
1.6. "Executable Form" means any form of the work other than Source Code Form.
1.7. "Larger Work" means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.
1.8. "License" means this document.
1.9. "Licensable" means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.
1.10. "Modifications" means any of the following: (a) any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or (b) any new file in Source Code Form that contains any Covered Software.
1.11. "Patent Claims" of a Contributor means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.
1.12. "Secondary License" means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.
1.13. "Source Code Form" means the form of the work preferred for making modifications.
1.14. "You" (or "Your") means an individual or a legal entity exercising rights under this License.

2. License Grants and Conditions
--------------------------------
2.1. Grants: Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions.
2.2. Effective Date: The licenses granted become effective on the date the Contributor first distributes such Contribution.
2.3. Limitations: No patent license is granted for code that a Contributor has removed, or for combinations with other software.
2.4. Subsequent Licenses: No additional grants result from Your choice to distribute under a subsequent version of this License.

3. Responsibilities
-------------------
3.1. Distribution of Source Form: All distribution of Covered Software in Source Code Form must be under this License.
3.2. Distribution of Executable Form: If You distribute Covered Software in Executable Form, You must also make it available in Source Code Form.
3.3. Distribution of a Larger Work: You may create and distribute a Larger Work under terms of Your choice.
3.4. Notices: You may not remove or alter any license notices.
3.5. Application of Additional Terms: You may choose to offer, and charge a fee for, warranty or support.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------
If compliance with this License is impossible due to statute or regulation, You must comply as much as possible.

5. Termination
--------------
5.1. Termination for Failure to Comply: All rights granted terminate automatically if You fail to comply with this License.
5.2. Termination for Patent Litigation: If You initiate litigation against any entity, all rights granted terminate.

6. Disclaimer of Warranty
-------------------------
Covered Software is provided "AS IS", without warranty of any kind.

7. Limitation of Liability
--------------------------
In no event shall any Contributor be liable for any damages.

8. Litigation
-------------
Any litigation relating to this License may be brought only in the courts of a jurisdiction where the defendant maintains its principal place of business.

9. Miscellaneous
----------------
This License represents the complete agreement concerning the subject matter.

10. Versions of the License
---------------------------
10.1. New Versions: Mozilla Foundation may publish revised and/or new versions of the License.
10.2. Effect of New Versions: You may distribute Covered Software under the terms of any later version.

Exhibit A - Source Code Form License Notice
-------------------------------------------
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 3.0 (modified). If a copy of the MPL was not distributed with this
  file, You can obtain one at http://example.com/MPL/3.0/.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------
  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 3.0 (modified).`}
          </div>
        </div>

        {/* MIT/X11 (Expat) */}
        <div className="license-card">
          <h3>⚖️ MIT/X11 License (Expat)</h3>
          <button className="btn-copy" data-target="mit-full">
            📋 Salin MIT
          </button>
          <div className="license-box" id="mit-full">
            {`MIT License (Expat)

Copyright (c) 2026 Muhamad Sazwan Bin Ismail (Sazwanismail)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </div>
        </div>
      </div>

      {/* Contoh kod Python dan C++ dengan notis lesen */}
      <h2>🐍⚙️ Contoh Kod (Dilindungi Dual License)</h2>
      <p>Setiap fail kod mengandungi notis lesen yang sesuai. Klik butang untuk melihat lesen penuh.</p>

      <div className="license-grid">
        <div>
          <h3>🐍 Python (utils.py)</h3>
          <div className="code-block">
            <span className="comment"># Copyright (c) 2026 Muhamad Sazwan Bin Ismail</span>
            <br />
            <span className="comment"># SPDX-License-Identifier: MIT OR MPL-3.0</span>
            <br />
            <br />
            <span className="keyword">def</span> <span className="function">hitung_persegi</span>(panjang: float, lebar: float) -&gt; float:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">&quot;&quot;&quot;Kira luas segi empat.&quot;&quot;&quot;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> panjang * lebar
            <br />
            <br />
            <span className="comment"># list comprehension</span>
            <br />
            nombor = [1, 2, 3, 4, 5]
            <br />
            kuasa_dua = [n**2 <span className="keyword">for</span> n <span className="keyword">in</span> nombor <span className="keyword">if</span> n % 2 == 0]
            <br />
            print(kuasa_dua)
          </div>
        </div>
        <div>
          <h3>⚙️ C++ (math.cpp)</h3>
          <div className="code-block">
            <span className="comment">// Copyright (c) 2026 Muhamad Sazwan Bin Ismail</span>
            <br />
            <span className="comment">// SPDX-License-Identifier: MIT OR MPL-3.0</span>
            <br />
            <br />
            <span className="keyword">#include</span> <span className="string">&lt;iostream&gt;</span>
            <br />
            <span className="keyword">#include</span> <span className="string">&lt;vector&gt;</span>
            <br />
            <br />
            <span className="keyword">double</span> <span className="function">hitungPersegi</span>(<span className="keyword">double</span> panjang, <span className="keyword">double</span> lebar) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> panjang * lebar;
            <br />
            {'}'}
            <br />
            <br />
            <span className="keyword">int</span> <span className="function">main</span>() {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;std::vector&lt;<span className="keyword">int</span>&gt; nombor = {'{'}1,2,3,4,5{'}'};
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">for</span> (<span className="keyword">int</span> n : nombor) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> (n % 2 == 0)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;std::cout &lt;&lt; n*n &lt;&lt; <span className="string">&quot; &quot;</span>;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> 0;
            <br />
            {'}'}
          </div>
        </div>
      </div>

      {/* Struktur repositori */}
      <h2>📁 Struktur Repositori Sazwan.Github.com</h2>
      <div className="code-block" style={{ background: '#f1f5f9', color: '#1e293b' }}>
        Sazwan.Github.com/<br />
        ├── LICENSE-MPL3.txt       (Mozilla Public License 3.0 modified)<br />
        ├── LICENSE-MIT.txt        (MIT/X11 License)<br />
        ├── README.md              (Dokumentasi projek)<br />
        ├── src/<br />
        │   ├── python/<br />
        │   │   └── utils.py       (MIT OR MPL-3.0)<br />
        │   └── cpp/<br />
        │       └── math.cpp       (MIT OR MPL-3.0)<br />
        ├── docs/                  (Dokumentasi tambahan)<br />
        └── examples/              (Contoh penggunaan)<br />
      </div>

      {/* Pautan Server (Hosting Percuma) */}
      <h2>🚀 Pautan Server · Hosting Percuma</h2>
      <p>Anda boleh hosting halaman ini secara percuma menggunakan platform berikut :</p>

      <div className="hosting-grid">
        <div className="hosting-card">
          <h4>🐙 GitHub Pages</h4>
          <p>Hosting percuma untuk repositori GitHub. Ideal untuk halaman statik.</p>
          <a href="https://pages.github.com/" className="link" target="_blank" rel="noopener noreferrer">
            Aktifkan GitHub Pages →
          </a>
          <p style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
            URL contoh: <code>sazwanismail.github.io/repo-name</code>
          </p>
        </div>
        <div className="hosting-card">
          <h4>▲ Vercel</h4>
          <p>Deploy dengan satu klik dari GitHub. Percuma untuk projek personal.</p>
          <a href="https://vercel.com/new" className="link" target="_blank" rel="noopener noreferrer">
            Deploy ke Vercel →
          </a>
        </div>
        <div className="hosting-card">
          <h4>⚡ Netlify</h4>
          <p>Drag and drop deploy. SSL percuma dan CI/CD automatik.</p>
          <a href="https://app.netlify.com/" className="link" target="_blank" rel="noopener noreferrer">
            Deploy ke Netlify →
          </a>
        </div>
        <div className="hosting-card">
          <h4>☁️ Render</h4>
          <p>Hosting statik dan full-stack dengan SSL percuma.</p>
          <a href="https://render.com/" className="link" target="_blank" rel="noopener noreferrer">
            Deploy ke Render →
          </a>
        </div>
      </div>

      {/* Arahan hosting GitHub Pages */}
      <div
        style={{
          background: '#e6f7ff',
          borderLeft: '6px solid #0099ff',
          padding: '1.2rem 1.8rem',
          borderRadius: '1rem',
          margin: '2rem 0',
        }}
      >
        <h3 style={{ marginTop: 0 }}>📌 Cara Hosting di GitHub Pages (Langkah Mudah)</h3>
        <ol style={{ marginLeft: '1.5rem' }}>
          <li>
            <strong>Buat repositori baru</strong> di GitHub (nama: contohnya <code>sazwan-framework</code>).
          </li>
          <li>
            <strong>Upload fail ini</strong> sebagai <code>index.html</code> dalam repositori.
          </li>
          <li>
            <strong>Pergi ke Settings → Pages</strong>.
          </li>
          <li>
            Pilih branch <code>main</code> (atau <code>master</code>) dan folder <code>/root</code>.
          </li>
          <li>
            Klik <strong>Save</strong>. URL akan muncul:{' '}
            <code>https://sazwanismail.github.io/sazwan-framework/</code>
          </li>
        </ol>
      </div>

      {/* Nota hak cipta */}
      <hr />
      <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem' }}>
        <p>
          <strong>📌 Ringkasan Hak Cipta:</strong>
        </p>
        <ul style={{ marginLeft: '2rem' }}>
          <li>
            <strong>Pemegang Hak Cipta:</strong> Muhamad Sazwan Bin Ismail / Sazwanismail / sazwan96
          </li>
          <li>
            <strong>Tahun:</strong> 2026 (dengan tarikh terbaru 29th)
          </li>
          <li>
            <strong>Lesen:</strong> Dual License — MPL 3.0 (modified) dan MIT/X11 (pilihan pengguna)
          </li>
        </ul>
      </div>

      <div className="footer">
        © 2026 Muhamad Sazwan Bin Ismail (Sazwanismail) · Hak cipta terpelihara di bawah MPL 3.0 (modified) dan MIT/X11.
        <br />
        Dokumen ini disediakan untuk tujuan demonstrasi dan hosting percuma.
      </div>
    </div>
  );
}
```

Cara penggunaan dalam Next.js (App Router):

1. Salin kod di atas ke dalam fail app/page.tsx (atau app/lisensi/page.tsx).
2. Salin juga kesemua CSS (gaya) dari halaman asal dan letakkan dalam fail app/globals.css (atau mana‑mana modul CSS).
3. Pastikan tiada konflik dengan kelas yang sama – gunakan nama kelas seperti asal.

Jika anda menggunakan Pages Router, anda hanya perlu menukar export default kepada export default function LicensePage() dan letakkan di pages/index.tsx.

Nota: Butang salin bergantung kepada useEffect dan dijalankan hanya di pihak klien – oleh itu 'use client' diperlukan dalam App Router.

Sekiranya anda ingin mengoptimumkan untuk prestasi, anda boleh memisahkan teks lesen yang panjang ke dalam pembolehubah atau fail berasingan.
