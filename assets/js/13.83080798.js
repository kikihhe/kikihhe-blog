(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{338:function(_,v,o){"use strict";o.r(v);var t=o(7),d=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"innodb-redo-log-和-undo-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb-redo-log-和-undo-log"}},[_._v("#")]),_._v(" InnoDB - redo log 和 undo log")]),_._v(" "),v("h2",{attrs:{id:"_1-redo-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-redo-log"}},[_._v("#")]),_._v(" 1. redo log")]),_._v(" "),v("p",[_._v("我们知道 InnoDB 存储引擎是以页为单位来管理存储空间的，我们进行的增删改查操作其实"),v("strong",[_._v("本质上是在内存中对页的访问")]),_._v("。也就是在缓冲中对页的修改。")]),_._v(" "),v("p",[_._v("但是我们又知道：InnoDB引擎支持的事务是有 持久性 这个特性的，持久性是什么呢？")]),_._v(" "),v("p",[_._v("持久性：事务提交后对于MySQL的影响一定会到达数据库并且对数据进行修改。")]),_._v(" "),v("p",[_._v("想一下这个场景：我们执行了一个 delete 操作，在内存中的缓冲池里将对应页数据修改了，但是"),v("strong",[_._v("在持久化到磁盘中之")]),_._v("​**"),v("code",[_._v("前")]),_._v("**，MySQL宕机了，磁盘中的数据没修改，但是宕机之后内存中的数据没了。。。这不就违反了持久性吗？")]),_._v(" "),v("p",[_._v("那么如何保证持久性呢？一个很简单的做法：在事务提交之"),v("strong",[_._v("前")]),_._v("把该事务所修改的所有页都刷新到磁盘。但是这种做法有问题：")]),_._v(" "),v("ul",[v("li",[_._v("刷新一个完整的数据页太浪费了，我们可能仅仅修改了页的某一个字节，现在就要把整个页都刷进磁盘？？？")])]),_._v(" "),v("p",[_._v("所以现在需要一个机制，保证不能频繁刷内存到磁盘，也要解决突然宕机的危害。")]),_._v(" "),v("p",[_._v("我们只是想"),v("code",[_._v("让已经提交了的事务对于数据库中数据所做的修改永久生效，即使后来系统崩溃，再重启后也能把这种修改回复出来")]),_._v("。所以我们没有必要每次都把事务修染指过的页都刷新到磁盘中，只需要把修改了哪些东西记录一下就好，比方说某个事务把系统表空间中的第100页中偏移量为1000处的那个字节的值从1改为2，那么我们只需要记录一下：")]),_._v(" "),v("p",[_._v("将0号表空间的100号页面的偏移量为1000出的值更新为2.")]),_._v(" "),v("p",[_._v("这样，"),v("code",[_._v("即使在 事务提交之后&amp;&amp;内存刷到磁盘之前")]),_._v(" 系统崩溃了，我们也可以使用redo log恢复更改的数据。")]),_._v(" "),v("p",[_._v("通过上述的描述我们知道**"),v("code",[_._v("redo log的作用 ：记录了事务对记录的修改")]),_._v("。**")]),_._v(" "),v("p",[_._v("redo log的格式如下：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("字段")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("type")]),_._v(" "),v("td",[_._v("这个redo log日志的类型")])]),_._v(" "),v("tr",[v("td",[_._v("space id")]),_._v(" "),v("td",[_._v("表空间id")])]),_._v(" "),v("tr",[v("td",[_._v("page number")]),_._v(" "),v("td",[_._v("页号")])]),_._v(" "),v("tr",[v("td",[_._v("data")]),_._v(" "),v("td",[_._v("该条redo log具体的内容")])])])]),_._v(" "),v("h2",{attrs:{id:"_2-undo-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-undo-log"}},[_._v("#")]),_._v(" 2. undo log")]),_._v(" "),v("h3",{attrs:{id:"_2-1-事务id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-事务id"}},[_._v("#")]),_._v(" 2.1 事务id")]),_._v(" "),v("p",[_._v("在学习undo log 之前，有必要了解了解一下事务id ：transaction_id。")]),_._v(" "),v("p",[_._v("在行记录中，MySQL自动为我们添加了几个字段：变长字段的长度列表、NULL值列表、记录头信息、row_id、"),v("strong",[_._v("transaction_id")]),_._v("、roll_pointer。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/0-20230523103652-sxptoog.png",alt:"0"}})]),_._v(" "),v("p",[_._v("挺好理解的，哪个事务对此条记录做了修改，这个transaction_id就是哪个事务的id。")]),_._v(" "),v("p",[_._v("并不是所有事务都有事务id，进行增删改操作的事务有id，只读的事务没有id。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-undo日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-undo日志"}},[_._v("#")]),_._v(" 2.2 undo日志")]),_._v(" "),v("p",[_._v("undo log又称为回滚日志，就是"),v("strong",[_._v("事务出现问题的时候执行回滚操作。")])]),_._v(" "),v("p",[_._v("事务需要保证原子性："),v("strong",[_._v("一个事务的语句要么全部执行成功，要么全部执行失败")]),_._v("。执行成功的情况就不说了，万一执行失败呢？事务中的语句已经对内存中的数据修改了，怎么执行回滚操作呢？")]),_._v(" "),v("p",[_._v("我们可以参考 redo log，把进行的操作记录下来，需要回滚的时候就可以按照记录的操作反方向执行，但是反方向执行又太麻烦了，我们索性记录反方向执行的操作。")]),_._v(" "),v("ul",[v("li",[_._v("用户增加 id = 1的记录，我们记录 删除id = 1的语句，回滚的时候直接执行这条语句。")]),_._v(" "),v("li",[_._v("用户删除 id = 1的记录，我们记录id=1的语句的全部字段值，回滚的时候直接执行这条语句。")]),_._v(" "),v("li",[_._v("用户修改 id = 1的记录，我们记录id=1的记录原来的数据，回滚的时候直接执行这条语句。")])]),_._v(" "),v("p",[_._v("这样就可以做到事务出现问题后执行回滚操作。")]),_._v(" "),v("h2",{attrs:{id:"_3-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[_._v("#")]),_._v(" 3. 总结")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("redo log日志保证持久性")])])]),_._v(" "),v("p",[v("strong",[v("code",[_._v("undo log日志保证原子性")])])]),_._v(" "),v("p",[_._v("可能有小伙伴会说，MySQL不是有三种日志吗？redo log、undo log、bin log")]),_._v(" "),v("p",[_._v("但是标题写的是InnoDB哦，本文主要还是针对InnoDB引擎的日志。binlog是MySQL的 Server 层的，所有引擎都有的~")]),_._v(" "),v("p",[_._v("简而言之，redo log和undo log是InnoDB引擎的，bin log是MySQL Server的。")]),_._v(" "),v("p",[_._v("还是在这里简述一下bin log吧：")]),_._v(" "),v("blockquote",[v("p",[_._v("MySQL 在完成一条更新操作后，Server 层会生成一条 binlog，等之后事务提交的时候，会将该事物执行过程中产生的所有 binlog 统一写 入 binlog 文件。")]),_._v(" "),v("p",[_._v("bin log 在我们手里常用于数据的同步，例如MySQL的主从、MySQL与Redis数据同步、MySQL与ES数据同步~")])]),_._v(" "),v("p",[_._v("‍")])])}),[],!1,null,null,null);v.default=d.exports}}]);