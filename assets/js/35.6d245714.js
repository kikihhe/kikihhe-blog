(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{362:function(t,_,a){"use strict";a.r(_);var v=a(7),s=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"五层网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五层网络模型"}},[t._v("#")]),t._v(" 五层网络模型")]),t._v(" "),_("h2",{attrs:{id:"_0-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0-概述"}},[t._v("#")]),t._v(" 0. 概述")]),t._v(" "),_("p",[t._v("计算机网络可以分为7层、5层、4层网络模型")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230307204653-ucpfbjt.png",alt:"image"}})]),t._v(" "),_("p",[t._v("其中5层模型从上到下依次为：")]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[_("p",[t._v("应用层 ：享受其下各层提供的服务，解决通过应用进程的交互来实现特定网络应用的问题")])]),t._v(" "),_("li",[_("p",[t._v("传输层 ：解决进程之间基于网络的通信问题")])]),t._v(" "),_("li",[_("p",[t._v("网络层 ：解决分组在多个网络上传输的问题")])]),t._v(" "),_("li",[_("p",[t._v("数据链路层 ：解决分组在一个网络（或一段链路）上传输的问题")])]),t._v(" "),_("li",[_("p",[t._v("物理层 ：解决使用何种信号来传输比特的问题")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230306220934-svv2z80.png",alt:"image"}})]),t._v(" "),_("h2",{attrs:{id:"_1-应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-应用层"}},[t._v("#")]),t._v(" 1. 应用层")]),t._v(" "),_("p",[t._v("应用层时计算机网络体系结构的最顶层，是设计和建立计算机网络的最终目的，也是计算机网络中发展最快的一部分。")]),t._v(" "),_("p",[t._v("其常用的协议有 ：动态主机配置协议"),_("strong",[t._v("DHCP")]),t._v("，超文本传输协议"),_("strong",[t._v("HTTP")]),t._v("、"),_("strong",[t._v("HTTPS")])]),t._v(" "),_("h2",{attrs:{id:"_2-运输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-运输层"}},[t._v("#")]),t._v(" 2. 运输层")]),t._v(" "),_("p",[t._v("物理层、数据链路层以及网络层共同解决了将主机通过异构网络互联起来所面临的问题，实现了主机到主机的通信。")]),t._v(" "),_("p",[t._v("但实际上计算机网络中进行通信的真正实体是位于通信两端主机的进程，这个过程就由运输层完成。")]),t._v(" "),_("p",[t._v("运输层向应用层屏蔽了下面网络核心的细节（如网络拓扑、路由选择），它使应用进程看见的好像是在两个运输层实体之间有一条端到端的逻辑通信信道。注意只是逻辑上的，不是物理上的。它给应用层提供了无连接不可靠的传输服务以及面向连接的可靠传输服务。")]),t._v(" "),_("p",[t._v("根据应用需求的不同，运输层为应用层提供了两种不同的应用协议，即无连接的UDP和面向连接的TCP。整个运输层围绕这两个协议展开。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230306223013-y301bj4.png",alt:"image"}})]),t._v(" "),_("h2",{attrs:{id:"_3-网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络层"}},[t._v("#")]),t._v(" 3. 网络层")]),t._v(" "),_("p",[t._v("网络层的主要任务就是将分组从源主机经过多个网络和多段链路传输到目的主机，可以将该任务划分为分组转发和路由选择两种重要的功能。")]),t._v(" "),_("p",[t._v("网络层向其上层（应用层、运输层）提供的两种服务 ：面向连接的虚电路服务、无连接的数据报服务。")]),t._v(" "),_("p",[t._v("其主要的协议为 ：网际协议IP、路由协议RIP")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230307205300-1vgtarp.png",alt:"image"}})]),t._v(" "),_("h2",{attrs:{id:"_4-数据链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据链路层"}},[t._v("#")]),t._v(" 4. 数据链路层")]),t._v(" "),_("p",[t._v("数据链路层在五层模型中位于物理层的上部，其他部分的下部。")]),t._v(" "),_("p",[t._v("链路（Link）是指从一个节点到相邻节点的一段物理线路，而中间没有任何其他的交换节点。")]),t._v(" "),_("p",[t._v("数据链路（Data Link）是基于链路的。在一条链路上传输数据时，除了需要链路本身，还需要一些必要的通信协议来控制这些数据的传输，把实现这些协议的硬件和软件加到链路上，就构成了数据链路。")]),t._v(" "),_("p",[t._v("帧（Frame）是数据链路层对等实体之间在水平方向进行逻辑通信的协议数据单元PDU。")]),t._v(" "),_("h2",{attrs:{id:"_5-物理层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-物理层"}},[t._v("#")]),t._v(" 5. 物理层")]),t._v(" "),_("p",[t._v("物理层解决了在各种传输媒体上"),_("strong",[t._v("传输比特0和1")]),t._v("的问题，进而给数据链路层提供“透明”传输比特流的服务。所谓“透明”是指数据链路层不知道也不必知道物理层究竟如何传输比特流的，它只需要享受物理层提供的传输服务即可。")]),t._v(" "),_("p",[t._v("‍")])])}),[],!1,null,null,null);_.default=s.exports}}]);