(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{343:function(t,s,_){"use strict";_.r(s);var v=_(7),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-redis主从概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis主从概念"}},[t._v("#")]),t._v(" 1. Redis主从概念")]),t._v(" "),s("p",[t._v("单机的Redis能够承载的QPS大概是几万左右。对于缓存来说，一般都是用来支持"),s("font",{attrs:{color:"Red"}},[s("strong",[t._v("读高并发")])]),t._v("的，因此架构做成主从(master-slave)结构，一主多从，主节点负责写，从节点负责读，主节点写之后将数据同步到从节点。"),s("font",{attrs:{color:"Red"}},[s("strong",[t._v("所有的读请求全部走从节点")])]),t._v("，这样也可以很轻松实现水平扩展，"),s("strong",[t._v("支撑读高并发")]),t._v("。")],1),t._v(" "),s("p",[t._v("并且在面试中经常会出现 "),s("strong",[t._v("“你是否了解Redis高可用”")]),t._v(" 这类面试题，Redis高可用回答包括两个方面，一个就是数据不能丢失，或者说尽量减少丢失；另一个就是保证Redis服务不中断。")]),t._v(" "),s("ul",[s("li",[t._v("对于尽量减少丢失，可以通过AOF和RDB数据持久化保证。")]),t._v(" "),s("li",[t._v("对于保证服务不中断，Redis就不能单点部署，这时候就需要使用Redis主从。")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{color:"Red"}},[t._v("怎么进行数据同步？")])],1),t._v(" "),s("p",[t._v("想要做数据同步，首先要有全部数据，那么哪个地方记载了Redis的全部数据呢？你是否还记得Redis的RDB持久化方式？它会将所有数据记录在rdb文件中，我们可以利用这个日志来进行数据的同步，当主节点想要进行数据同步时，直接将RDB文件甩给从从节点就行了~")]),t._v(" "),s("p",[t._v("（当然“全部甩过去”只是一个构想，Redis才不会使用这种愚蠢的方式）")])]),t._v(" "),s("p",[t._v("Redis毕竟是个数据库，想要实现写主读从的模式就需要进行数据同步：将写到主节点的数据同步到从节点。"),s("font",{attrs:{color:"Red"}},[s("strong",[t._v("数据同步的过程")])]),t._v("是我们主要想解决的问题，Redis将数据的同步方式分为两种："),s("font",{attrs:{color:"Red"}},[s("strong",[t._v("全量同步")]),t._v("、"),s("strong",[t._v("增量同步")])]),t._v("。")],1),t._v(" "),s("ul",[s("li",[t._v("全量同步 ：大部分用于从节点第一次连接到主节点时需要拿到主节点的全部数据。")]),t._v(" "),s("li",[t._v("增量同步 ：全量同步后还会有后续的数据写入主节点，这些后续增加的数据的同步就叫做增量同步。")])]),t._v(" "),s("h2",{attrs:{id:"_2-全量同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-全量同步"}},[t._v("#")]),t._v(" 2. 全量同步")]),t._v(" "),s("p",[t._v("全量同步刚才解释过了，就是Redis主节点把全部的数据都丢给从节点，也就是RDB文件的全部内容。")]),t._v(" "),s("p",[t._v("什么时候会发生全量同步呢？肯定是从节点第一次连接到到主节点的时候啦，但是只有这一个场景吗？不，有两种情况会触发全量同步：")]),t._v(" "),s("ol",[s("li",[t._v("从节点第一次连接主节点。")]),t._v(" "),s("li",[t._v("从节点宕机时间太久，无法进行增量同步。")])]),t._v(" "),s("p",[t._v("先来学习一下全量同步吧，全量同步分为三个阶段：")]),t._v(" "),s("ol",[s("li",[t._v("主从之间建立连接。")]),t._v(" "),s("li",[t._v("主节点把数据同步到从节点。")]),t._v(" "),s("li",[t._v("主节点把新写的命令发送到从节点。")])]),t._v(" "),s("p",[s("font",{attrs:{color:"Red"}},[s("strong",[t._v("第一个阶段：主从之间建立连接")])])],1),t._v(" "),s("p",[t._v("根据经验，主从之间建立连接的过程肯定不仅仅是建立连接这么简单，它俩肯定要交换一些信息。")]),t._v(" "),s("ul",[s("li",[t._v("从节点发送"),s("font",{attrs:{color:"Red"}},[t._v("psync")]),t._v("命令，告诉主节点自己想要成为它的从节点，这个命令中包含自己的runID，主节点发现这个runID与自己的runID不一致，它就意识到这个家伙是第一次同步，需要进行全量同步。")],1),t._v(" "),s("li",[t._v("于是主节点响应"),s("font",{attrs:{color:"Red"}},[t._v("fullresync")]),t._v("命令告诉从节点让它进行全量同步，这个命令中包含主节点的runID与目前RDB的复制进度offset，发送runID是为了让从节点也使用这个runID，下一次来的时候就知道它是不是第一次连接了，发送offset是为了告诉从节点你第一次就复制RDB文件的这个地方数据。")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230701114819-cax8n8k.png",alt:"image"}})]),t._v(" "),s("p",[s("font",{attrs:{color:"Red"}},[s("strong",[t._v("第二个阶段：主节点把数据同步到从节点")])])],1),t._v(" "),s("ul",[s("li",[t._v("首先主节点会使用bgsave命令生成RDB文件，将RDB文件发送给从节点")]),t._v(" "),s("li",[t._v("从节点收到RDB文件后会先清空当前的全部数据，毕竟你要跟主节点的数据一致，那么你原来的数据你就要删除，之后就按照offset加载RDB文件")]),t._v(" "),s("li",[t._v("主节点把RDB文件发送给从节点进行同步的过程是异步的，主节点还有可能接收到新的数据写入，于是它把这些数据记录在日志文件"),s("font",{attrs:{color:"Red"}},[t._v("repl_baklog")]),t._v("中")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230701134428-fbkf6va.png",alt:"image"}})]),t._v(" "),s("p",[s("font",{attrs:{color:"Red"}},[s("strong",[t._v("第三个阶段：主节点把新写的命令发送到从节点。")])])],1),t._v(" "),s("ul",[s("li",[t._v("主节点将repl_baklog发送给从节点，从节点继续将内容写入。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230701134551-7hojjre.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"_3-增量同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-增量同步"}},[t._v("#")]),t._v(" 3. 增量同步")]),t._v(" "),s("p",[t._v("全量同步完运行了一段时间后，主从产生了不一致总不能再进行一次全量同步吧，这时就需要使用"),s("strong",[t._v("增量同步")]),t._v("。")]),t._v(" "),s("p",[t._v("从Redis2.8开始支持增量同步，而且是断点续传的增量复制，也就是说如果出现网络延迟或者从节点宕机导致复制中断的情况，在系统恢复后仍然可以从上次同步的地方开始同步。")]),t._v(" "),s("p",[t._v("它的原理是主从都维护一个offset（复制偏移量），master_offset、slave_offset，主节点每一次都将从 slave_offset 到 master_offset的数据传输给从节点，什么？没收到？那就重新从slave_offset传。")]),t._v(" "),s("p",[t._v("offset记录的主从节点在repl_baklog日志中的偏移量，repl_baklog实际上就是主与从之间数据差异的缓冲区，它是一个大小固定的文件，假如它是1024k，现在offset到了第1024k的位置，下一次它会覆盖前面的数据。")]),t._v(" "),s("p",[t._v("这样是有危险的，如图：")]),t._v(" "),s("p",[t._v("正常情况下，slave与master之间的差距并不多，是可以使用增量同步保证数据一致性。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230701140933-it0xyin.png",alt:"image"}})]),t._v(" "),s("p",[t._v("但是万一slave宕机，master中的数据比slave数据整整多了一个”环“，那么就无法进行增量同步了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20230701141149-8z9hox4.png",alt:"image"}})]),t._v(" "),s("p",[s("font",{attrs:{color:"Purple"}},[t._v("这时就需要重新进行全量复制（也就是第二种进行全量同步的情况）")]),t._v("，而全量复制非常损耗性能，所以我们要 提高repl_baklog的大小并且当从节点宕机时尽快恢复，减少全量同步的出现。")],1),t._v(" "),s("h2",{attrs:{id:"_4-无磁盘复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-无磁盘复制"}},[t._v("#")]),t._v(" 4. 无磁盘复制")]),t._v(" "),s("p",[t._v("全量同步和增量同步都是基于RDB文件的，需要进行磁盘IO，但是我们可以开启无磁盘同步，这就不会生成RDB文件，而是把RDB文件中的内容不保存在磁盘中，直接在内存中发送给从节点。")]),t._v(" "),s("div",{staticClass:"language-redis extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("repl-diskless-sync yes\n")])])]),s("h2",{attrs:{id:"_5-主从同步注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-主从同步注意事项"}},[t._v("#")]),t._v(" 5. 主从同步注意事项")]),t._v(" "),s("p",[t._v("主从模式解决了数据备份和性能的问题，但是还是存在一些问题：")]),t._v(" "),s("ol",[s("li",[t._v("第一次建立连接时一定是全量同步，同步的耗时比较久，此时应该避开Redis提供服务的高峰期。")]),t._v(" "),s("li",[t._v("如果有多个从节点需要建立连接，可以考虑将几个从节点错开时间段，避免主节点内存占用过多。此外如果从节点太多，也可以调整主从复制的结构，使其变为树状结构。")]),t._v(" "),s("li",[t._v("在一主一从或者一主多从的情况下，如果主服务器挂了，对外提供的服务就不可用了，单点问题没有解决。所以会出现后面的哨兵集群模式。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);