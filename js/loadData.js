function escapeHTML(str) {  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");}

let html="";
html=data.map(item=>`
    <div class="item">
        <p class="title">${item.title}</p>
        ${item.img_src ? `<img src="${item.img_src}" alt="">` : ''}
        ${item.code ? `<pre><code class="language-javascript">${escapeHTML(item.code)}</code></pre>` : ''}
        ${item.link ? `<a href="${item.link}">${item.link}</a>` : ''}
    </div>    
`).join('');

document.getElementById("item-container").innerHTML=html;
Prism.highlightAll();