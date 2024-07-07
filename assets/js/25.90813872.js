(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{354:function(v,t,_){"use strict";_.r(t);var i=_(7),l=Object(i.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"开发规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[v._v("#")]),v._v(" 开发规范")]),v._v(" "),t("p",[v._v("写一篇笔记记录一下公司的开发规范，以免以后踩坑🥲")]),v._v(" "),t("ol",[t("li",[v._v("避免使用魔法值，而是使用枚举类或者静态常量")]),v._v(" "),t("li",[v._v("针对不同的异常要使用不同的 catch 语句，禁止任何异常都使用Exception捕获")]),v._v(" "),t("li",[v._v("使用try{}catch{}捕获异常后，必须记录日志，禁止使用System.out.println()、printStackTrace打印日志。")]),v._v(" "),t("li",[v._v("避免使用三层及以上的if/else嵌套，可以使用卫语句、策略模式实现")]),v._v(" "),t("li",[v._v("设计了复杂的方法/使用了巧妙设计的方法（如使用了设计模式）必须要添加注释")]),v._v(" "),t("li",[v._v("单个方法限制长度为200行")]),v._v(" "),t("li",[v._v("禁止在循环中调用数据库")]),v._v(" "),t("li",[v._v("抽象方法使用javadoc注释，包括参数、返回值、异常、方法以及方法实现的功能")]),v._v(" "),t("li",[v._v("无用的代码直接删掉，而不是注释")]),v._v(" "),t("li",[v._v("不要在代码后面写注释，在代码上面写")]),v._v(" "),t("li",[v._v("文件资源、数据库资源或者流对象使用后必须close")]),v._v(" "),t("li",[v._v("访问数据库使用默认字符集，不要自己指定字符集")]),v._v(" "),t("li",[v._v("一般情况下 SQL连表不超过三张，实在不行可以分开查")]),v._v(" "),t("li",[v._v("不要在项目中使用SQL递归（其他情况下可以使用）")]),v._v(" "),t("li",[v._v("使用多线程时尽量使用 ThreadPoolExecutor 来创建线程池，设置合理的参数，避免资源浪费。")]),v._v(" "),t("li",[v._v("避免常规的空指针，尽量使用工具类判空如Strings.isEmpty、Collections.emptyList、Collections.emptyMap")]),v._v(" "),t("li",[v._v("包装类使用equals比较，BigDecimal使用compareTo比较")]),v._v(" "),t("li",[v._v("redis的key设计原则：systemName:env:businessGroup:businessKey")]),v._v(" "),t("li",[v._v("一般情况下方法的参数不超过5个，多了推荐封装为对象。")]),v._v(" "),t("li",[v._v("后端所有接口采用统一的返回实体。")])]),v._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("笔记")]),v._v(" "),t("p",[v._v("我是在循环中使用数据库操作被老大提醒了~~")])])])}),[],!1,null,null,null);t.default=l.exports}}]);