(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{381:function(_,l,t){"use strict";t.r(l);var v=t(7),e=Object(v.a)({},(function(){var _=this,l=_._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h2",{attrs:{id:"_0-前言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[_._v("#")]),_._v(" 0. 前言")]),_._v(" "),l("p",[_._v("Xxl-Job一共八张表：")]),_._v(" "),l("ol",[l("li",[_._v("xxl_job_group ：执行器组")]),_._v(" "),l("li",[_._v("xxl_job_info ：定时任务信息")]),_._v(" "),l("li",[_._v("xxl_job_lock ：分布式锁")]),_._v(" "),l("li",[_._v("xxl_job_log ：定时任务执行日志")]),_._v(" "),l("li",[_._v("xxl_job_log_report ：执行日志统计")]),_._v(" "),l("li",[_._v("xxl_job_logglue ：glue模式的日志")]),_._v(" "),l("li",[_._v("xxl_job_registry ：执行器的注册信息")]),_._v(" "),l("li",[_._v("xxl_job_user ：用户信息")])]),_._v(" "),l("p",[_._v("不会全部涉及，其中 xxl_job_logglue、xxl_job_user、xxl_job_log_report 不会讲解。")]),_._v(" "),l("h2",{attrs:{id:"_1-xxl-job-info"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-xxl-job-info"}},[_._v("#")]),_._v(" 1. xxl_job_info")]),_._v(" "),l("p",[_._v("这张表是定时任务的信息表，字段如下：")]),_._v(" "),l("p",[l("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231120105808878.png",alt:"image-20231120105808878"}})]),_._v(" "),l("ul",[l("li",[_._v("id ：该任务的id")]),_._v(" "),l("li",[_._v("job_group ：该任务关联的执行器组")]),_._v(" "),l("li",[_._v("job_desc ：该任务的描述")]),_._v(" "),l("li",[_._v("alarm_email ：告警邮箱")]),_._v(" "),l("li",[_._v("schedule_type ：调度类型，corn模式、固定速率")]),_._v(" "),l("li",[_._v("schedule_conf ：调度配置，corn模式下，该值为cron表达式")]),_._v(" "),l("li",[_._v("misfire_strategy ：任务过期策略，假如执行器宕机任务没有计时处理怎么办。")]),_._v(" "),l("li",[_._v("executor_handler ：定时任务的名称")]),_._v(" "),l("li",[_._v("executor_param ：定时任务的参数")]),_._v(" "),l("li",[_._v("executor_block_strategy ：定时任务阻塞策略")]),_._v(" "),l("li",[_._v("executor_timeout ：定时任务的超时时间")]),_._v(" "),l("li",[_._v("executor_fail_retry_count ：定时任务失败重试次数")]),_._v(" "),l("li",[_._v("trigger_status ：任务的状态，0-停止，1-运行")]),_._v(" "),l("li",[_._v("trigger_last_time ：上次调度时间")]),_._v(" "),l("li",[_._v("trigger_next_time ：下次调度时间")])]),_._v(" "),l("p",[_._v("值得注意的是，在 xxl-job 中定时任务并没有跟执行器直接关联，而是跟执行器组关联。")]),_._v(" "),l("p",[_._v("执行器组也就是 xxl_job_group表。每一个执行器组中都有1~n台执行器，定时任务的执行过程：")]),_._v(" "),l("ol",[l("li",[_._v("通过 trigger_next_time 查到5秒内将要执行的任务，如果指定了执行器那么直接执行。")]),_._v(" "),l("li",[_._v("如果没有指定执行器，通过 job_group 查到负责该任务的执行器组")]),_._v(" "),l("li",[_._v("通过执行器组拿到负责该任务的所有执行器，通过负载均衡选出一个执行器去执行任务。")])]),_._v(" "),l("h2",{attrs:{id:"_2-xxl-job-group"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-xxl-job-group"}},[_._v("#")]),_._v(" 2. xxl_job_group")]),_._v(" "),l("p",[l("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231120111033841.png",alt:"image-20231120111033841"}})]),_._v(" "),l("ul",[l("li",[_._v("id ：该执行器组的id")]),_._v(" "),l("li",[_._v("app_name ：执行器组的app_name，唯一标识，如"),l("code",[_._v("xxl-job-executor-sample")])]),_._v(" "),l("li",[_._v("title ：执行器组的name，如"),l("code",[_._v("示例执行器")])]),_._v(" "),l("li",[_._v("address_type ：执行器组的注册方式，手动/自动")]),_._v(" "),l("li",[_._v("address_list ：执行器组的所有执行器IP，以逗号隔开")]),_._v(" "),l("li",[_._v("update_time ：更新时间")])]),_._v(" "),l("p",[_._v("请不要将 app_name 与 title 混为一谈，app_name 比 title 更加重要。你可以翻翻我们之前为执行器做的配置，一个执行器可以不配置 title 但是一定要配置 app_name，因为执行器通过 app_name 才能找到它属于哪个执行器组。")]),_._v(" "),l("p",[_._v("执行器的注册流程：")]),_._v(" "),l("ol",[l("li",[_._v("通过 app_name 找到执行器组")]),_._v(" "),l("li",[_._v("将自己的IP加入该执行器组的 address_list 字段")]),_._v(" "),l("li",[_._v("留个悬念")])]),_._v(" "),l("h2",{attrs:{id:"_3-xxl-job-registry"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-xxl-job-registry"}},[_._v("#")]),_._v(" 3. xxl_job_registry")]),_._v(" "),l("p",[l("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231120111750748.png",alt:"image-20231120111750748"}})]),_._v(" "),l("p",[_._v("这个表是执行器的注册信息。")]),_._v(" "),l("ul",[l("li",[_._v("id ：注册信息id")]),_._v(" "),l("li",[_._v("registry_group ：这个执行器注册信息是属于哪个执行器组")]),_._v(" "),l("li",[_._v("registry_key ：执行器组的 app_name")]),_._v(" "),l("li",[_._v("registry_value ：该执行器的IP地址")]),_._v(" "),l("li",[_._v("update_time ：该执行器的上一次的注册时间")])]),_._v(" "),l("p",[_._v("这个表维护着 xxl_job 体系的心跳机制，我们怎么知道某个执行器是否还活着？通过查阅这个表就可以。")]),_._v(" "),l("p",[_._v("xxl_job 规定执行器要每30s给调度中心发送心跳信息，心跳信息发送后会更新 xxl_job_registry 的 update_time 字段，如果三次没发送，也就是 update_time 字段的时间距离现在已经 90s 了，认定此执行器死亡，将此执行器移除。")]),_._v(" "),l("h2",{attrs:{id:"_4-xxl-job-log"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-xxl-job-log"}},[_._v("#")]),_._v(" 4. xxl_job_log")]),_._v(" "),l("p",[l("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231120112517134.png",alt:"image-20231120112517134"}})]),_._v(" "),l("ul",[l("li",[_._v("id ：日志id")]),_._v(" "),l("li",[_._v("job_group ：负责此任务的执行器组")]),_._v(" "),l("li",[_._v("executor_address ：负责"),l("font",{attrs:{color:"Blue"}},[_._v("执行")]),_._v("此任务的执行器地址")],1),_._v(" "),l("li",[_._v("executor_handler ：此任务的名称。就是 @XxlJob() 注解里的那个。")]),_._v(" "),l("li",[_._v("executor_param ：任务参数")]),_._v(" "),l("li",[_._v("executor_sharding_param ：分片参数")]),_._v(" "),l("li",[_._v("executor_fail_retry ：失败重试次数")]),_._v(" "),l("li",[_._v("trigger_code ：调度结果")]),_._v(" "),l("li",[_._v("handle_code ：执行结果")])]),_._v(" "),l("p",[_._v("xxl-job 规定一个任务的执行有两种状态 ：调度结果、执行结果。")]),_._v(" "),l("p",[_._v("调度中心和执行器是通过 HTTP 通信的，这个 HTTP 消息发送出去算是"),l("font",{attrs:{color:"Blue"}},[_._v("调度成功")]),_._v("，消息被执行器收到并执行完成算是"),l("font",{attrs:{color:"Blue"}},[_._v("执行成功")]),_._v("。")],1),_._v(" "),l("p",[_._v("如果调度中心宕机，那么调度结果就是失败。如果执行器宕机，那么执行结果就是失败。xxl-job可以通过这两个字段大概判断失败类型。例如 ：一个任务10分钟前就调度成功了，现在还没有执行成功，并且执行器注册信息已经超过90s，那么这个执行器必然宕机了。")]),_._v(" "),l("h2",{attrs:{id:"_5-xxl-job-lock"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-xxl-job-lock"}},[_._v("#")]),_._v(" 5. xxl_job_lock")]),_._v(" "),l("p",[l("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231120113533827.png",alt:"image-20231120113533827"}})]),_._v(" "),l("p",[_._v("没错，这个表只有一个字段，这个字段只有一条信息。")]),_._v(" "),l("p",[_._v("xxl-job 的所谓分布式就是靠它实现的。")]),_._v(" "),l("p",[_._v("你想啊，如果执行器有很多个，那么调度中心可以使用负载均衡挑选出一个。")]),_._v(" "),l("p",[_._v("但是如果调度中心有很多个呢？谁来负责“挑选”这个重要的事情呢？那么就要抢分布式锁，谁抢到谁调度。")]),_._v(" "),l("div",{staticClass:"language-sql extra-class"},[l("pre",{pre:!0,attrs:{class:"language-sql"}},[l("code",[l("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("select")]),_._v(" lock_name "),l("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("from")]),_._v(" xxl_job_lock "),l("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("for")]),_._v(" "),l("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("update")]),_._v("\n")])])]),l("p",[_._v("如上sql语句就可以实现抢占分布式锁功能。每一个调度中心的每一次调度前都会执行这个sql。抢到了就调度，没抢到就算了~")])])}),[],!1,null,null,null);l.default=e.exports}}]);