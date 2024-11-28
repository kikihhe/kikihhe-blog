(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{379:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[t._v("#")]),t._v(" 1. 下载")]),t._v(" "),a("p",[t._v("XXL-JOB官网 ："),a("a",{attrs:{href:"https://www.xuxueli.com/xxl-job/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.xuxueli.com/xxl-job/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("XXL-JOB源码 ：")]),t._v(" "),a("ul",[a("li",[t._v("Gitee ："),a("a",{attrs:{href:"https://gitee.com/xuxueli0323/xxl-job",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xuxueli0323/xxl-job"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Github ："),a("a",{attrs:{href:"https://github.com/xuxueli/xxl-job/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xuxueli/xxl-job/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("尽量去Gitee下载吧，这样快一点。")]),t._v(" "),a("p",[t._v("注意版本哦，下载 2.4.0 或者 2.4.1 的，不要下载 2.2.0 或之前的。")]),t._v(" "),a("h2",{attrs:{id:"_2-导入sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入sql"}},[t._v("#")]),t._v(" 2. 导入SQL")]),t._v(" "),a("p",[t._v("任务是需要记录的，所以 XXL-JOB 作为一个 SpringBoot 项目是需要MySQL数据库的在以下目录中找到SQL语句：")]),t._v(" "),a("p",[a("font",{attrs:{color:"Blue"}},[t._v("xxl-job-master\\xxl-job-master\\doc\\db\\tables_xxl_job.sql")])],1),t._v(" "),a("p",[t._v("在数据库中执行，一共有八张表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("表名")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("xxl_job_group")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_info")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_lock")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_log")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_log_report")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_logglue")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_registry")])]),t._v(" "),a("tr",[a("td",[t._v("xxl_job_user")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改配置文件"}},[t._v("#")]),t._v(" 3. 修改配置文件")]),t._v(" "),a("p",[t._v("找到 xxl-job-admin 项目，修改它的 application.properties 配置文件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("修改数据源   【必做】")]),t._v(" "),a("p",[t._v("首先要将数据库改成我们上述导入的数据")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### xxl-job, datasource")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.datasource.url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("jdbc:mysql://127.0.0.1:3309/xxl_job?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.datasource.username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("root")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.datasource.password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1234")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.datasource.driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("com.mysql.cj.jdbc.Driver")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("修改日志文件 【选做】")]),t._v(" "),a("p",[a("code",[t._v("这个涉及到调度中心与执行器了，你可以不必配置这一处东西。")])]),t._v(" "),a("p",[t._v("一个项目的日志是非常重要的，在 xxl-job 中，每一天对应一个文件夹，这一天每一次执行的任务都对应一个文件，所以 xxl-job 日志的体量非常大。在配置文件中，xxl-job 默认在C盘创建日志，你可以将它放在比较显眼的位置，在后面讲 xxl-job 日志体系的时候更容易找到。")]),t._v(" "),a("p",[t._v("在 xxl-job-executor 项目中有一个子项目：xxl-job-executor-sample-springboot 的 application.properties")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### xxl-job executor log-path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("xxl.job.executor.logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/data/applogs/xxl-job/jobhandler")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动"}},[t._v("#")]),t._v(" 4. 启动")]),t._v(" "),a("p",[t._v("如果你已经更改好了上述的配置文件，现在就可以运行xxl-job-admin了，找到 XxlJobAdminApplication 启动类，点击运行后：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("20:27:40.009 logback [xxl-job, admin JobScheduleHelper#scheduleThread] INFO  c.x.j.a.c.thread.JobScheduleHelper - >>>>>>>>> init xxl-job admin scheduler success.\n")])])]),a("p",[t._v("显示这个算是运行成功，现在你可以登录web界面："),a("a",{attrs:{href:"http://localhost:8080/xxl-job-admin/toLogin",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/xxl-job-admin"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("用户名 ：admin")]),t._v(" "),a("p",[t._v("密码 ：123456")]),t._v(" "),a("p",[t._v("登陆成功界面 ：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231112203424213.png",alt:"image-20231112203424213"}})]),t._v(" "),a("h2",{attrs:{id:"_5-执行实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-执行实例"}},[t._v("#")]),t._v(" 5. 执行实例")]),t._v(" "),a("p",[t._v("很多开源项目都提供了example，xxl-job也不例外，在 xxl-job-executor 项目中有一个子项目：xxl-job-executor-sample-springboot 就是集成了SpringBoot 的实例，打开它，运行。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01.962")]),t._v(" logback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INFO")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("EmbedServer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" xxl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("job remoting server start success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nettype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("EmbedServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n")])])]),a("p",[t._v("出现这个就是运行成功了。")]),t._v(" "),a("p",[t._v("现在有两个进程启动了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231112203947509.png",alt:"image-20231112203947509"}})]),t._v(" "),a("ul",[a("li",[t._v("XxlJobAdminApplication ：调度中心")]),t._v(" "),a("li",[t._v("XxlJobExecutorApplication ：执行器")])]),t._v(" "),a("p",[t._v("实例的路径：com/xxl/job/executor/service/jobhandler/SampleXxlJob.java")]),t._v(" "),a("p",[t._v("打开后看到一个示例任务")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleXxlJob")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleXxlJob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 1、简单任务示例（Bean模式）\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@XxlJob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demoJobHandler"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demoJobHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"简单任务实例执行了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default success")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略其他的任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们想要让这个任务运行该怎么办？打开web界面 -> 任务管理 -> 测试任务一 -> 操作 -> 执行一次。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://typorehwf.oss-cn-chengdu.aliyuncs.com/image-20231112204124732.png",alt:"image-20231112204124732"}})]),t._v(" "),a("p",[t._v("于是，XxlJobExecutorApplication 的控制台就会出现 ：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("简单任务实例执行了\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);