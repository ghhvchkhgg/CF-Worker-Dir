/**
 * 自定义网站配置 
 */
const config = {
  title: "我的数字港湾",                 // 自定义网站标题
  subtitle: "Explore the World",       // 自定义网站副标题
  logo_icon: "compass outline",        // 选择你的Logo图标
  hitokoto: true,                      // 开启一言 (每日一句)
  search: true,                        // 开启搜索功能
  search_engine: [                     // 搜索引擎配置
    {
      name: "谷 歌",
      template: "https://www.google.com/search?q=$s"
    },
    {
      name: "百 度",
      template: "https://www.baidu.com/s?wd=$s"
    },
    {
      name: "必 应",
      template: "https://www.bing.com/search?q=$s"
    },
    {
      name: "GitHub",
      template: "https://github.com/search?q=$s"
    }
  ],
  selling_ads: false,
  sell_info: {
    domain: "example.com",
    price: 500,
    mon_unit: "yen sign",
    contact: [
      {
        type: "envelope",
        content: "info@example.com"
      }
    ]
  },
  lists: [
    {
      name: "常用推荐",
      icon: "star",
      list: [
        {
          url: "https://www.google.com",
          name: "Google",
          desc: "全球最大搜索引擎"
        },
        {
          url: "https://chatgpt.com",
          name: "ChatGPT",
          desc: "OpenAI 智能对话"
        },
        {
          url: "https://www.bilibili.com",
          name: "哔哩哔哩",
          desc: "国内知名的视频弹幕网站"
        },
        {
          url: "https://www.youtube.com",
          name: "YouTube",
          desc: "全球最大视频分享平台"
        },
        {
          url: "https://mail.google.com",
          name: "Gmail",
          desc: "谷歌邮箱服务"
        },
        {
          url: "https://translate.google.com",
          name: "谷歌翻译",
          desc: "在线多语言翻译"
        },
        {
          url: "https://www.taobao.com",
          name: "淘宝网",
          desc: "万能的购物网站"
        },
        {
          url: "https://www.jd.com",
          name: "京东",
          desc: "正品低价品质保证"
        }
      ]
    },
    {
      name: "AI 与 效率",
      icon: "rocket",
      list: [
        {
          url: "https://claude.ai",
          name: "Claude",
          desc: "Anthropic 强力 AI 模型"
        },
        {
          url: "https://www.deepl.com",
          name: "DeepL",
          desc: "目前最准确的翻译工具"
        },
        {
          url: "https://www.notion.so",
          name: "Notion",
          desc: "全能笔记与协作平台"
        },
        {
          url: "https://www.canva.com",
          name: "Canva",
          desc: "在线平面设计工具"
        },
        {
          url: "https://tinypng.com",
          name: "TinyPNG",
          desc: "智能图片压缩工具"
        },
        {
          url: "https://www.speedtest.net",
          name: "Speedtest",
          desc: "全球网速测试"
        },
        {
          url: "https://tool.lu",
          name: "在线工具箱",
          desc: "程序员的工具箱"
        }
      ]
    },
    {
      name: "技术开发",
      icon: "code",
      list: [
        {
          url: "https://github.com/",
          name: "GitHub",
          desc: "全球最大的代码托管平台"
        },
        {
          url: "https://stackoverflow.com/",
          name: "Stack Overflow",
          desc: "全球程序员问答社区"
        },
        {
          url: "https://v2ex.com",
          name: "V2EX",
          desc: "创意工作者社区"
        },
        {
          url: "https://linux.do",
          name: "Linux Do",
          desc: "新晋硬核技术社区"
        },
        {
          url: "https://juejin.cn",
          name: "掘金",
          desc: "帮助开发者成长的社区"
        },
        {
          url: "https://segmentfault.com/",
          name: "思否",
          desc: "中文技术问答社区"
        },
        {
          url: "https://developer.mozilla.org",
          name: "MDN Web Docs",
          desc: "Web 开发权威文档"
        },
        {
          url: "https://www.docker.com",
          name: "Docker",
          desc: "容器化应用平台"
        },
        {
          url: "https://dash.cloudflare.com",
          name: "Cloudflare",
          desc: "网络安全与CDN服务"
        }
      ]
    },
    {
      name: "社交媒体",
      icon: "users",
      list: [
        {
          url: "https://twitter.com",
          name: "X (Twitter)",
          desc: "全球即时资讯社交"
        },
        {
          url: "https://www.instagram.com",
          name: "Instagram",
          desc: "分享生活瞬间"
        },
        {
          url: "https://telegram.org",
          name: "Telegram",
          desc: "注重隐私的即时通讯"
        },
        {
          url: "https://discord.com",
          name: "Discord",
          desc: "游戏玩家与社区语音"
        },
        {
          url: "https://www.reddit.com",
          name: "Reddit",
          desc: "互联网头条与讨论区"
        },
        {
          url: "https://weibo.com",
          name: "新浪微博",
          desc: "随时随地发现新鲜事"
        },
        {
          url: "https://www.zhihu.com",
          name: "知乎",
          desc: "有问题，就会有答案"
        },
        {
          url: "https://www.douban.com",
          name: "豆瓣",
          desc: "书影音兴趣社区"
        }
      ]
    },
    {
      name: "影视娱乐",
      icon: "film",
      list: [
        {
          url: "https://www.netflix.com",
          name: "Netflix",
          desc: "全球流媒体巨头"
        },
        {
          url: "https://www.spotify.com",
          name: "Spotify",
          desc: "正版流媒体音乐平台"
        },
        {
          url: "https://www.douyin.com",
          name: "抖音",
          desc: "记录美好生活"
        },
        {
          url: "https://www.twitch.tv",
          name: "Twitch",
          desc: "全球游戏直播平台"
        },
        {
          url: "https://music.163.com",
          name: "网易云音乐",
          desc: "音乐的力量"
        },
        {
          url: "https://store.steampowered.com",
          name: "Steam",
          desc: "PC游戏分发平台"
        },
        {
          url: "https://wallhaven.cc",
          name: "Wallhaven",
          desc: "高质量壁纸库"
        }
      ]
    },
    {
      name: "设计灵感",
      icon: "paint brush",
      list: [
        {
          url: "https://dribbble.com",
          name: "Dribbble",
          desc: "设计师灵感分享"
        },
        {
          url: "https://www.behance.net",
          name: "Behance",
          desc: "Adobe 创意展示平台"
        },
        {
          url: "https://huaban.com",
          name: "花瓣网",
          desc: "陪你做生活的设计师"
        },
        {
          url: "https://unsplash.com",
          name: "Unsplash",
          desc: "免费高质量无版权图片"
        },
        {
          url: "https://www.iconfont.cn",
          name: "Iconfont",
          desc: "阿里矢量图标库"
        },
        {
          url: "https://fonts.google.com",
          name: "Google Fonts",
          desc: "免费开源字体库"
        }
      ]
    },
    {
      name: "资讯阅读",
      icon: "newspaper",
      list: [
        {
          url: "https://sspai.com",
          name: "少数派",
          desc: "高效工作品质生活"
        },
        {
          url: "https://36kr.com",
          name: "36氪",
          desc: "让一部分人先看到未来"
        },
        {
          url: "https://www.wikipedia.org",
          name: "维基百科",
          desc: "自由的百科全书"
        },
        {
          url: "https://www.bbc.com/news",
          name: "BBC News",
          desc: "国际新闻资讯"
        },
        {
          url: "https://feeds.pub",
          name: "Feeds Pub",
          desc: "RSS 订阅源发现"
        },
        {
          url: "https://medium.com",
          name: "Medium",
          desc: "高质量英文阅读社区"
        }
      ]
    }
  ]
}

/** * 系统功能区 (请勿轻易修改)
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

// 核心监听器：这是Cloudflare Worker运行的入口
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/* 通过分析链接 实时获取favicon */
function getFavicon(url) {
  if (url.match(/https{0,1}:\/\//)) {
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  } else {
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  }
}

/** Render Functions
 * 渲染模块函数
 */
function renderIndex() {
  const footer = el('footer', [], el('div', ['class="footer"'], 'Powered by' + el('a', ['class="ui label"', 'href="https://github.com/sleepwood/cf-worker-dir"', 'target="_blank"'], el('i', ['class="github icon"'], "") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a', ['class="ui label"'], el('i', ['class="balance scale icon"'], "") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader() {
  const item = (template, name) => el('a', ['class="item"', `data-url="${template}"`], name);

  var nav = el('div', ['class="ui large secondary inverted menu"'], el('div', ['class="item"'], el('p', ['id="hitokoto"'], '条条大路通罗马')))
  var title = el('h1', ['class="ui inverted header"'], el('i', [`class="${config.logo_icon} icon"`], "") + el('div', ['class="content"'], config.title + el('div', ['class="sub header"'], config.subtitle)));
  var menu = el('div', ['id="sengine"', 'class="ui bottom attached tabular inverted secondary menu"'], el('div', ['class="header item"'], '&nbsp;') + config.search_engine.map((link, key) => {
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
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(/https{0,1}:\/\/\S+\//)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(/\$s/, $('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(event){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>
  </html>`
}
