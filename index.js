/**
 * 自定义网站配置 
 */
const config = {
  title: "我的数字港湾",
  subtitle: "Explore the World",
  logo_icon: "compass outline", 
  hitokoto: true, 
  search: true,
  search_engine: [
    { name: "谷 歌", template: "https://www.google.com/search?q=$s" },
    { name: "百 度", template: "https://www.baidu.com/s?wd=$s" },
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

/** * 系统逻辑区 
 */
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
  if (url.match(/https{0,1}:\/\//)) {
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  } else {
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  }
}

function renderIndex() {
  const footer = el('footer', [], el('div', ['class="footer"'], 'Powered by ' + el('a', ['class="ui label"', 'href="https://github.com/sleepwood/cf-worker-dir"', 'target="_blank"'], el('i', ['class="github icon"'], "") + 'Cf-Worker-Dir') + ' &copy; Modified by Gemini'));
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
  var input = el('div', ['class="ui left corner labeled right icon fluid large input"'], el('div', ['class="ui left corner label"'], el('img', ['id="search-fav"', 'class="left floated avatar ui image"', 'src="https://www.baidu.com/favicon.ico"'], "")) + el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索你想要知道的……"', 'autocomplete="off"'], "") + el('i', ['class="inverted circular search link icon"'], ""));
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
        /* 这里的CSS负责美化页面 */
        body {
            /* 每日必应壁纸作为背景，如果不喜欢可以换成固定的图片链接 */
            background: url('https://bing.img.run/1920x1080.php') no-repeat center center fixed;
            background-size: cover;
        }
        /* 遮罩层，让字在背景上更清楚 */
        body::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.2); 
            z-index: -1;
        }
        /* 顶部区域透明化 */
        #head {
            background: transparent !important;
            padding-bottom: 20px;
        }
        .ui.inverted.header .sub.header {
            color: rgba(255,255,255,0.9);
        }
        /* 卡片玻璃拟态效果 */
        .ui.card, .ui.cards>.card {
            background: rgba(255, 255, 255, 0.85) !important; /* 半透明白色 */
            backdrop-filter: blur(10px); /* 毛玻璃模糊 */
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border-radius: 12px;
        }
        /* 鼠标悬停卡片上浮 */
        .ui.card:hover, .ui.cards>.card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            background: rgba(255, 255, 255, 0.95) !important;
        }
        /* 分类标题样式 */
        .ui.horizontal.divider.header {
            color: #fff !important;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            margin-top: 40px !important;
        }
        /* 搜索框美化 */
        .ui.large.input {
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            border-radius: 50px;
            overflow: hidden;
        }
        /* 底部版权栏 */
        .footer {
            color: rgba(255,255,255,0.8);
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        /* 移动端适配 */
        @media only screen and (max-width: 767px) {
            .ui.card { margin-bottom: 10px !important; }
        }
      </style>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      // 修复后的搜索逻辑
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(/https{0,1}:\/\/\S+\//)[0] + '/favicon.ico') ;
      });

      // 执行搜索的函数
      function doSearch() {
          var val = $('#searchinput').val();
          if(val === "") return;
          var url = $('#sengine a.active').data('url');
          // 使用 encodeURIComponent 确保中文搜索正常，且替换 $s
          url = url.replace('$s', encodeURIComponent(val));
          window.open(url, "_blank");
      }

      $('.search').on('click', function (e) {
          doSearch();
      });

      /* 监听回车事件 */
      $("#searchinput").on("keypress", function(event){
          if (event.keyCode === 13){
            doSearch();
          }
      });

      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>
  </html>`
}
