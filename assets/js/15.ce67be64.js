(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{341:function(_,v,t){"use strict";t.r(v);var a=t(7),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_12-锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-锁"}},[_._v("#")]),_._v(" 12. 锁")]),_._v(" "),v("h2",{attrs:{id:"_1-锁的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-锁的概念"}},[_._v("#")]),_._v(" 1. 锁的概念")]),_._v(" "),v("p",[_._v("锁机制是==数据库为了保证数据的一致性，在使用共享资源时并发访问变得有序所设计的一种规则。==")]),_._v(" "),v("h2",{attrs:{id:"_2-锁的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-锁的分类"}},[_._v("#")]),_._v(" 2. 锁的分类")]),_._v(" "),v("p",[_._v("在MySQL中可以按照功能与范围分类 ，")]),_._v(" "),v("p",[_._v("按照功能分类 ：共享锁、排他锁。")]),_._v(" "),v("p",[_._v("按照范围分类 ：全局锁、表级锁、行级锁。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20221228114651-y7tqr83.png",alt:"image"}})]),_._v(" "),v("h3",{attrs:{id:"_2-1-共享锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-共享锁"}},[_._v("#")]),_._v(" 2.1 共享锁")]),_._v(" "),v("p",[_._v("共享锁又称读锁 (shared lock)，即共享读。")]),_._v(" "),v("p",[_._v("读取操作创建的锁。其他用户可以并发读取数据，但任何事务都不能对数据进行修改（获取数据上的排他锁），直到已释放所有共享锁。当如果事务对读锁进行修改操作，很可能会造成死锁。")]),_._v(" "),v("blockquote",[v("p",[_._v("如果事务A给数据加了共享读锁 ：")]),_._v(" "),v("p",[_._v("事务A能读，不能写。")]),_._v(" "),v("p",[_._v("事务B能读，不能写。")]),_._v(" "),v("p",[_._v("即 ：共享数据的读权限，关闭数据的写权限。")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-排他锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-排他锁"}},[_._v("#")]),_._v(" 2.2 排他锁")]),_._v(" "),v("p",[_._v("排他锁又称写锁（exclusive lock），即独占写。"),v("br"),_._v("\n若某个事物对某一行加上了排他锁，只能这个事务对其进行读写，在此事务结束之前，其他事务不能对其进行加任何锁，其他进程可以读取,不能进行写操作，需等待其释放。 "),v("strong",[_._v("排它锁是悲观锁的一种实现")]),_._v("，在上面悲观锁也介绍过。")]),_._v(" "),v("blockquote",[v("p",[_._v("如果事务A给数据加了排他锁 ：")]),_._v(" "),v("p",[_._v("事务A可以读，可以写。")]),_._v(" "),v("p",[_._v("事务B不能读，不能写。")]),_._v(" "),v("p",[_._v("即 ：独占数据读写操作的权限。排斥其他事务的读写操作。")])]),_._v(" "),v("h3",{attrs:{id:"_2-3-全局锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-全局锁"}},[_._v("#")]),_._v(" 2.3 全局锁")]),_._v(" "),v("p",[_._v("全局锁就是对整个数据库实例加锁，加锁后整个实例处于只读状态，后续的增删改、修改表这些操作的事务提交都会被阻塞。")]),_._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("-- 全局锁，整个数据库的所有表都加上锁。")]),_._v("\nflush "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("tables")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("with")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("read")]),_._v(" locks"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),v("h3",{attrs:{id:"_2-4-表级锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-表级锁"}},[_._v("#")]),_._v(" 2.4 表级锁")]),_._v(" "),v("p",[_._v("表级锁就是锁住某张表。分为 表锁、元数据锁、意向锁。")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("表锁")]),_._v(" "),v("p",[_._v("表锁分为读锁和写锁，遵循上述 共享读，独占写。")])]),_._v(" "),v("li",[v("p",[_._v("元数据锁")]),_._v(" "),v("p",[_._v("维护表结构的数据一致性。在访问一张表时会自动加元数据锁，如果某一张表存在未提交的事务，那么就不能修改表的结构。")])]),_._v(" "),v("li",[v("p",[_._v("意向锁")]),_._v(" "),v("p",[_._v("如果某张表的某一行加了行锁，这个表是不能加表锁的，但是如何判断呢？遍历整张表查看是否有行锁？太麻烦。")]),_._v(" "),v("p",[_._v("意向锁存在于表中，在加表锁之前查看这张表是否有意向锁，如果有意向锁，代表这张表某些字段加了行锁，就不能加表锁了。")]),_._v(" "),v("blockquote",[v("p",[_._v("意向共享锁 与 表共享锁 兼容，与表排他锁互斥。")]),_._v(" "),v("p",[_._v("意向排他锁 与 表共享、表排他都互斥。")]),_._v(" "),v("p",[_._v("即 ：共享锁与共享锁兼容，排他锁与任何锁都互斥。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-5-行级锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-行级锁"}},[_._v("#")]),_._v(" 2.5 行级锁")]),_._v(" "),v("p",[_._v("锁住对应的行。应用在Innodb引擎中，MyISAM不支持。（InnoDB与MyISAM的三大区别之一）。")]),_._v(" "),v("p",[_._v("InnoDB的数据是基于索引组织的，行锁是通过对索引上的索引项加锁来实现的，而不是对记录加锁。行锁锁的是索引项。")]),_._v(" "),v("p",[_._v("主要分为 ：行锁、间隙锁、临键锁")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("行锁")]),_._v(" "),v("p",[_._v("锁定单行记录，防止其他事务对此进行update、delete操作。")])]),_._v(" "),v("li",[v("p",[_._v("间隙锁")]),_._v(" "),v("p",[_._v("锁定索引记录间隙（不包含该记录），确保索引记录间隙不变，防止其他事务在间隙中插入数据。")])]),_._v(" "),v("li",[v("p",[_._v("临键锁")]),_._v(" "),v("p",[_._v("临键锁是行锁和间隙锁的组合，同时锁住索引记录以及记录前面的间隙。")])])]),_._v(" "),v("h2",{attrs:{id:"_3-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[_._v("#")]),_._v(" 3. 总结")]),_._v(" "),v("p",[_._v("在本篇中就对"),v("code",[_._v("MySQL")]),_._v("​的锁机制有了大概认知，从锁的概念、分类，到共享锁、排他锁、全局锁、表级锁、行级锁的介绍，相信本章看下来，足够让你对"),v("code",[_._v("MySQL")]),_._v("​锁机制有一个系统化的认知，那么我们下篇再见。")])])}),[],!1,null,null,null);v.default=s.exports}}]);