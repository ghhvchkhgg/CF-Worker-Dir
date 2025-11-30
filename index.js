/**
 * Cyber Blue / Neon Tech - 完整导航站 Worker 源码
 * 保持原功能（搜索、Hitokoto、分类卡片、出售弹窗），并全面升级视觉为赛博蓝/霓虹科技
 * 主要修复：搜索引擎切换与搜索触发 bug；完善 favicon 提取；新增炫酷赛博蓝样式与交互。
 */

/* -------------------- 配置区（可按需修改） -------------------- */
const config = {
  title: "我的数字港湾",
  subtitle: "Explore the World",
  logo_icon: "compass outline",
  hitokoto: true,
  search: true,
  search_engine: [
    { name: "谷 歌", template: "https://www.google.com/search?q=$s" },
    { name: "必 应", template: "https://www.bing.com/search?q=$s" },
    { name: "GitHub", template: "https://github.com/search?q=$s" }
  ],
  selling_ads: false,
  sell_info: { domain: "example.com", price: 500, mon_unit: "yen sign", contact: [{ type: "envelope", content: "info@example.com" }] },
  lists: [
    {
      name: "常用推荐", icon: "star",
      list: [
        { url: "https://www.google.com", name: "Google", desc: "全球最大搜索引擎" },
        { url: "https://chatgpt.com", name: "ChatGPT", desc: "OpenAI 智能对话" },
        { url: "https://www.bilibili.com", name: "哔哩哔哩", desc: "干杯 - ( ゜- ゜)つロ" },
        { url: "https://www.youtube.com", name: "YouTube", desc: "全球最大视频平台" },
        { url: "https://mail.google.com", name: "Gmail", desc: "谷歌邮箱服务" },
        { url: "https://translate.google.com", name: "谷歌翻译", desc: "在线多语言翻译" },
        { url: "https://www.taobao.com", name: "淘宝网", desc: "万能的购物网站" },
        { url: "https://www.jd.com", name: "京东", desc: "多快好省" }
      ]
    },
    {
      name: "AI 与 效率", icon: "rocket",
      list: [
        { url: "https://claude.ai", name: "Claude", desc: "Anthropic 强力 AI" },
        { url: "https://www.deepl.com", name: "DeepL", desc: "精准翻译工具" },
        { url: "https://www.notion.so", name: "Notion", desc: "全能笔记协作" },
        { url: "https://www.canva.com", name: "Canva", desc: "在线设计工具" },
        { url: "https://tinypng.com", name: "TinyPNG", desc: "图片压缩神器" },
        { url: "https://www.speedtest.net", name: "Speedtest", desc: "网速测试" }
      ]
    },
    {
      name: "技术与开发", icon: "code",
      list: [
        { url: "https://github.com/", name: "GitHub", desc: "代码托管平台" },
        { url: "https://stackoverflow.com/", name: "Stack Overflow", desc: "技术问答社区" },
        { url: "https://v2ex.com", name: "V2EX", desc: "创意工作者社区" },
        { url: "https://linux.do", name: "Linux Do", desc: "硬核技术社区" },
        { url: "https://juejin.cn", name: "掘金", desc: "开发者社区" },
        { url: "https://www.docker.com", name: "Docker", desc: "容器化平台" },
        { url: "https://dash.cloudflare.com", name: "Cloudflare", desc: "网络与安全" }
      ]
    },
    {
      name: "社交与媒体", icon: "users",
      list: [
        { url: "https://twitter.com", name: "X (Twitter)", desc: "全球资讯社交" },
        { url: "https://telegram.org", name: "Telegram", desc: "隐私即时通讯" },
        { url: "https://discord.com", name: "Discord", desc: "玩家语音社区" },
        { url: "https://www.reddit.com", name: "Reddit", desc: "互联网头条" },
        { url: "https://weibo.com", name: "微博", desc: "发现新鲜事" },
        { url: "https://www.zhihu.com", name: "知乎", desc: "发现更大的世界" }
      ]
    },
    {
      name: "影视与娱乐", icon: "film",
      list: [
        { url: "https://www.netflix.com", name: "Netflix", desc: "流媒体巨头" },
        { url: "https://open.spotify.com", name: "Spotify", desc: "音乐流媒体" },
        { url: "https://www.douyin.com", name: "抖音", desc: "记录美好生活" },
        { url: "https://www.twitch.tv", name: "Twitch", desc: "游戏直播" },
        { url: "https://store.steampowered.com", name: "Steam", desc: "快乐的源泉" },
        { url: "https://wallhaven.cc", name: "Wallhaven", desc: "高清壁纸库" }
      ]
    },
    {
      name: "资讯与阅读", icon: "newspaper",
      list: [
        { url: "https://sspai.com", name: "少数派", desc: "高效工作生活" },
        { url: "https://36kr.com", name: "36氪", desc: "科技创投媒体" },
        { url: "https://www.wikipedia.org", name: "维基百科", desc: "自由的百科全书" },
        { url: "https://www.bbc.com/news", name: "BBC News", desc: "全球新闻资讯" },
        { url: "https://medium.com", name: "Medium", desc: "优质英文阅读" }
      ]
    }
  ]
}

/* -------------------- 系统逻辑区（请勿轻易修改） -------------------- */
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(), config.selling_ads ? renderSeller() : null), init);
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

function getFavicon(url) {
  // 尽量返回稳定的 favicon 链接，使用 Google S2 服务
  try {
    const u = new URL(url);
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + u.origin;
  } catch (e) {
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }
}

function renderIndex() {
  const footer = el('footer', [], el('div', ['class="footer"'], 'Powered by ' + el('a', ['class="ui label"', 'href="https://github.com/sleepwood/cf-worker-dir"', 'target="_blank"'], el('i', ['class="github icon"'], "") + 'Cf-Worker-Dir') + ' © Modified by Gemini'));
  return renderHeader() + renderMain() + footer;
}

function renderHeader() {
  const item = (template, name) => el('a', ['class="item"', `data-url="${template}"`], name);
  var nav = el('div', ['class="ui large secondary inverted menu"'], el('div', ['class="item"'], el('p', ['id="hitokoto"'], '条条大路通罗马')))
  var title = el('h1', ['class="ui inverted header"'], el('i', [`class="${config.logo_icon} icon"`], "") + el('div', ['class="content"'], config.title + el('div', ['class="sub header"'], config.subtitle)));
  var menu = el('div', ['id="sengine"', 'class="ui bottom attached tabular inverted secondary menu"'], el('div', ['class="header item"'], ' ') + config.search_engine.map((link, key) => {
    if (key == 0) {
      return el('a', ['class="active item"', `data-url="${link.template}"`], link.name);
    } else {
      return item(link.template, link.name);
    }
  }).join(""))
  var input = el('div', ['class="ui left corner labeled right icon fluid large input"'], el('div', ['class="ui left corner label"'], el('img', ['id="search-fav"', 'class="left floated avatar ui image"', 'src="https://www.google.com/favicon.ico"'], "")) + el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索你想要知道的……"', 'autocomplete="off"', 'onkeypress="if(event.keyCode==13){doSearch()}"'], "") + el('i', ['class="inverted circular search link icon"', 'onclick="doSearch()"', 'id="search-btn"'], ""));
  return el('header', [], el('div', ['id="head"', 'class="ui inverted vertical masthead center aligned segment"'], (config.hitokoto ? el('div', ['id="nav"', 'class="ui container"'], nav) : "") + el('div', ['id="title"', 'class="ui text container"'], title + (config.search ? input + menu : "") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url, name, desc) => el('a', ['class="card"', `href=${url}`, 'target="_blank"'], el('div', ['class="content"'], el('img', ['class="left floated avatar ui image"', `src=${getFavicon(url)}`], "") + el('div', ['class="header"'], name) + el('div', ['class="meta"'], desc)));
    const divider = el('h4', ['class="ui horizontal divider header"'], el('i', [`class="${item.icon} icon"`], "") + item.name);
    var content = el('div', ['class="ui four stackable cards"'], item.list.map((link) => {
      return card(link.url, link.name, link.desc);
    }).join(""));
    return el('div', ['class="ui basic segment"'], divider + content);
  }).join("");
  return el('main', [], el('div', ['class="ui container"'], main));
}

function renderSeller() {
  const item = (type, content) => el('div', ['class="item"'], el('i', [`class="${type} icon"`], "") + el('div', ['class="content"'], content));
  var title = el('h1', ['class="ui yellow dividing header"'], el('i', ['class="gem outline icon"'], "") + el('div', ['class="content"'], config.sell_info.domain + ' 正在出售'));
  var action = el('div', ['class="actions"'], el('div', ['class="ui basic cancel inverted button"'], el('i', ['class="reply icon"'], "") + '返回'));
  var contact = config.sell_info.contact.map((list) => {
    return item(list.type, list.content);
  }).join("");
  var column = el('div', ['class="column"'], el('h3', ['class="ui center aligned icon inverted header"'], el('i', ['class="circular envelope open outline grey inverted icon"'], "") + '联系我') + el('div', ['class="ui relaxed celled large list"'], contact));
  var price = el('div', ['class="column"'], el('div', ['class="ui large yellow statistic"'], el('div', ['class="value"'], el('i', [`class="${config.sell_info.mon_unit} icon"`], "") + config.sell_info.price)));
  var content = el('div', ['class="content"'], el('div', ['class="ui basic segment"'], el('div', ['class="ui two column stackable center aligned grid"'], el('div', ['class="ui inverted vertical divider"'], '感兴趣？') + el('div', ['class="middle aligned row"'], price + column))));
  return el('div', ['id="seller"', 'class="ui basic modal"'], title + content + action);
}

function renderHTML(index, seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
      <style>
        /* ---------------- 赛博蓝 / 霓虹主题样式 ---------------- */
        :root{
          --bg-1: #05080f; /* 最深处 */
          --bg-2: #08203a; /* 中层 */
          --accent: #00e5ff; /* 青色霓虹 */
          --accent-2: #5b6fff; /* 蓝紫 */
          --card-bg: rgba(6,12,22,0.6);
          --glass-border: rgba(80,160,255,0.12);
          --muted: rgba(200,220,255,0.7);
        }

        html,body{height:100%;margin:0;font-family:Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial}
        body {
            background: #e6f3ff;
            color: #1b2a41;
            -webkit-font-smoothing:antialiased;
            -moz-osx-font-smoothing:grayscale;
            overflow-y:auto;
        }

        /* 动态流光覆盖层 */
        body::after{
          content: '';
          position: fixed; inset:0; z-index:0; pointer-events:none;
          background: linear-gradient(90deg, rgba(91,111,255,0.06), rgba(0,229,255,0.04), rgba(91,111,255,0.06));
          mix-blend-mode: overlay;
          animation: glide 12s linear infinite;
        }
        @keyframes glide{from{background-position:0%}to{background-position:200%}}

        /* Header 区域 */
        #head{background:transparent !important;padding:36px 0 12px 0;position:relative;z-index:2}

        /* 标题 */
        .ui.inverted.header .content{color: #1b2a41;box-shadow:0 8px 30px rgba(10,20,40,0.6);border-radius:14px;padding:4px}
        #searchinput{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(15,25,40,0.05));border:none;color: #1b2a41;padding:12px 16px;border-radius:12px;width:70%}
        #searchinput::placeholder{color: #1b2a41; border-radius:999px; padding:10px}
        .ui.left.corner.label img{border-radius:6px}

        /* 搜索激活 glow 动效 */
        .search-glow{box-shadow:0 0 30px rgba(0,229,255,0.14),0 0 60px rgba(91,111,255,0.06) !important; transform:translateY(-2px)}

        /* 搜索引擎 tabs */
        #sengine .item{color: #1b2a41; border-radius:8px; color: #1b2a41;
            backdrop-filter: blur(8px) saturate(120%);
            border: 1px solid rgba(10,40,90,0.25) !important;
            box-shadow: 0 6px 30px rgba(2,6,20,0.6);
            transition: all 0.25s cubic-bezier(.2,.9,.2,1);
            border-radius:12px;
        }
        .ui.card .header{color: #1b2a41;font-weight:700}
        .ui.card .meta{color: #1b2a41;padding-top:8px}
        .ui.card .content{position:relative}

        .ui.cards>.card:hover{
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 60px rgba(3,9,30,0.75), 0 0 40px rgba(0,229,255,0.06);
            border: 1px solid rgba(0,229,255,0.18) !important;
        }

        /* 卡片左侧 favicon 圆形 */
        .ui.image{width:44px;height:44px;border-radius:8px;object-fit:cover;margin-right:12px}

        /* 分类标题 neon 样式 */
        .ui.horizontal.divider.header{
            color: #1b2a41;background:transparent;padding:14px 22px;border-radius:999px;font-weight:800;letter-spacing:1px;margin-top:48px;border:1px solid rgba(255,255,255,0.04);
            position:relative;overflow:visible
        }
        .ui.horizontal.divider.header:before{
            content:'';position:absolute;left:-20px;right:-20px;top:50%;height:1px;background:linear-gradient(90deg, transparent, rgba(91,111,255,0.18), transparent);transform:translateY(-50%);z-index:-1
        }

        /* Footer */
        .footer{color: #1b2a41;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(10,20,40,0.06));padding:10px;border-radius:10px;display:inline-block}

        @media only screen and (max-width: 767px){
            .ui.card{margin-bottom:16px !important}
            #searchinput{width:100%}
        }

        /* Dark header background */
  header, .page-header, #header, .top-area {
    background: #0a0f1a !important;
    background-color: #0a0f1a !important;
  }
</style>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      // ---------------- 修复后的 Tab 切换与 favicon 获取 ----------------
      $('#sengine').on('click', 'a.item', function (e) {
        // 移除之前激活态
        $('#sengine a.active').removeClass('active');
        $(this).addClass('active');

        // 安全提取 domain，用于 favicon
        const template = $(this).data('url') || '';
        try {
            const origin = new URL(template.replace('$s', 'test')).origin;
            $('#search-fav').attr('src', origin + '/favicon.ico');
        } catch (err) {
            $('#search-fav').attr('src', 'https://www.google.com/favicon.ico');
        }
      });

      // 点击搜索时的主逻辑
      function doSearch() {
          var val = document.getElementById('searchinput').value.trim();
          if(val === "") return;

          // 获取当前选择的引擎链接（更稳健）
          var urlTemplate = $('#sengine a.active').data('url') || '';

          // 优先使用模板替换 $s，如果没有模板则 fallback 到 google
          if (urlTemplate && urlTemplate.indexOf('$s') !== -1) {
              var finalUrl = urlTemplate.replace('$s', encodeURIComponent(val));
              window.open(finalUrl, "_blank");
          } else if (urlTemplate) {
              // 如果模板没有 $s（极端情况），把搜索词作为 query 拼接
              try {
                  const u = new URL(urlTemplate);
                  const q = (u.search ? '&' : '?') + 'q=' + encodeURIComponent(val);
                  window.open(urlTemplate + q, '_blank');
              } catch (e) {
                  window.open('https://www.google.com/search?q=' + encodeURIComponent(val), '_blank');
              }
          } else {
              window.open('https://www.google.com/search?q=' + encodeURIComponent(val), '_blank');
          }
      }

      // 搜索按钮互动效果（发光）
      $('#searchinput').on('focus', function(){
        $('.ui.large.input').addClass('search-glow');
      }).on('blur', function(){
        $('.ui.large.input').removeClass('search-glow');
      });

      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });

      // 页面 DOM ready 时，确保默认 favicon 正确
      $(function(){
        const active = $('#sengine a.active');
        if(active && active.data('url')){
          try{ const origin = new URL(active.data('url').replace('$s','test')).origin; $('#search-fav').attr('src', origin + '/favicon.ico'); }catch(e){}
        }
      });

    </script>
  </body>
  </html>`
}
