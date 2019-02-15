## 1. ECMAScript 和 JavaScript 的关系
 ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现。

javascript是netscape创造的并交给了国际标准化组织ECMA，之所以不叫做JavaScript由于商标的问题，java是sun公司的商标，根据授权协议只有Netscape公司可以合法使用JavaScript这个名字，另外就是为了体现JavaScript的标准的制定者不是ECMA所以取名为ECMAScript

## 2. ECMAScript 的历史
ECMAScript 1.0 是 1997 年发布的，接下来的两年，连续发布了 ECMAScript 2.0（1998 年 6 月）和 ECMAScript 3.0（1999 年 12 月）。3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。

2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，但是它的大部分内容被 ES6 继承了。因此，ES6 制定的起点其实是 2000 年。

为什么 ES4 没有通过呢？因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。2008 年 7 月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA 开会决定，中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分，发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5。

## 3. ES6 与 ECMAScript 2015 的关系
ES6是ECMA的为JavaScript制定的第6个版本的标准，标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。ECMAscript 2015 是在2015年6月份发布的ES6的第一个版本。依次类推ECMAscript 2016 是ES6的第二个版本、  ECMAscript 2017 是ES6的第三个版本……

## 4. 语法提案的批准流程 
-Stage 0 - Strawman（展示阶段）

-Stage 1 - Proposal（征求意见阶段）

-Stage 2 - Draft（草案阶段）

-Stage 3 - Candidate（候选人阶段）

-Stage 4 - Finished（定案阶段）

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站 GitHub.com/tc39/ecma262 查看。

## 4.浏览器对标准的部署进度
各大浏览器的最新版本，对 ES6 的支持可以查看
kangax.github.io/compat-table/es6/
。随着时间的推移，支持度已经越来越高了，超过 90%的 ES6 语法特性都实现了。
 
