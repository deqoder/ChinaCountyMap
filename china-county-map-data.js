var jsondata = [
{'county': '东兴', 'color': 'green', 'links': [ {'name': '1.从东兴出发', 'link': 'http://tv.cctv.com/2012/12/16/VIDE1355596345042594.shtml'}]},
{'county': '防城港', 'color': 'green', 'links': [{'name': '2.山城防城港', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716231605.shtml'}]},
{'county': '宁明', 'color': 'green', 'links': [{'name': '3.山水看宁明', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716313685.shtml'}]},
{'county': '凭祥', 'color': 'green', 'links': [{'name': '4.凭祥走边关', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716381743.shtml'}]},
{'county': '龙州', 'color': 'green', 'links': [{'name': '5.龙州探奇', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716463850.shtml'}]},
{'county': '大新', 'color': 'green', 'links': [{'name': '6.美丽大新,神奇靖西', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298757949941.shtml'}]},
{'county': '靖西', 'color': 'green', 'links': [{'name': '6.美丽大新,神奇靖西', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298757949941.shtml'}]},
{'county': '那坡', 'color': 'green', 'links': [{'name': '7.那山那坡', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716658191.shtml'}]},
{'county': '富宁', 'color': 'green', 'links': [{'name': '8.富裕安宁之地', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716754305.shtml'}]},
{'county': '广南', 'color': 'green', 'links': [{'name': '9.向往田园生活', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716839457.shtml'}]},
{'county': '文山', 'color': 'blue', 'links': [{'name': '10.文山的幸福时光', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716916620.shtml'}]},
{'county': '麻栗坡', 'color': 'green', 'links': [{'name': '10.文山的幸福时光', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298716916620.shtml'}]},
{'county': '马关', 'color': 'green', 'links': [{'name': '11.浪漫马关', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717086886.shtml' }]},
{'county': '河口', 'color': 'green', 'links': [{'name': '12.滇南明珠河口', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717146900.shtml' }]},
{'county': '金平', 'color': 'green', 'links': [{'name': '13.绿色高地金平', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717227917.shtml' }]},
{'county': '红河', 'color': 'blue', 'links': [{'name': '14.七彩风韵红河', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717321934.shtml' }]},
{'county': '元阳', 'color': 'blue', 'links': [{'name': '15.山乡风情', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717411950.shtml' }]},
{'county': '绿春', 'color': 'green', 'links': [{'name': '15.山乡风情', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717411950.shtml' }]},
{'county': '江城', 'color': 'yellow', 'links': [{'name': '16.一城连三国', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717503973.shtml' }]},
{'county': '勐腊', 'color': 'yellow', 'links': [{'name': '17.走进勐腊', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717621995.shtml' }]},
{'county': '景洪', 'color': 'green', 'links': [{'name': '18.魅力景洪', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717702116.shtml' }]},
{'county': '勐海', 'color': 'green', 'links': [{'name': '19.神奇勐海', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717799137.shtml' }]},
{'county': '澜沧', 'color': 'green', 'links': [{'name': '20.澜沧：不想说再见', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717906160.shtml' }]},
{'county': '孟连', 'color': 'green', 'links': [{'name': '21.孟连：寻找到的好地方', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298717983178.shtml' }]},
{'county': '西盟', 'color': 'green', 'links': [{'name': '22.西盟：走进狂欢佤部落', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718087196.shtml' }]},
{'county': '沧源', 'color': 'green', 'links': [{'name': '23.走访神秘佤寨', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718199215.shtml' }]},
{'county': '耿马', 'color': 'green', 'links': [{'name': '24.走读边城耿马', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718300232.shtml' }]},
{'county': '镇康', 'color': 'green', 'links': [{'name': '25.神奇镇康之行', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718413252.shtml' }]},
{'county': '芒市', 'color': 'green', 'links': [{'name': '26.云南德宏寻石问玉', 'link': 'http://tv.cctv.com/2012/12/16/VIDE1355596320558258.shtml' }]},
{'county': '瑞丽', 'color': 'green', 'links': [{'name': '26.云南德宏寻石问玉', 'link': 'http://tv.cctv.com/2012/12/16/VIDE1355596320558258.shtml' }]},
{'county': '陇川', 'color': 'green', 'links': [{'name': '27.德宏民族风情探访', 'link': 'http://tv.cctv.com/2012/12/16/VIDE1355596315783121.shtml' }]},
{'county': '盈江', 'color': 'green', 'links': [{'name': '27.德宏民族风情探访', 'link': 'http://tv.cctv.com/2012/12/16/VIDE1355596315783121.shtml' }]},
{'county': '腾冲', 'color': 'green', 'links': [{'name': '28.寻幽访玉走腾冲', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718487270.shtml' },{'name': '29.神奇边城腾冲', 'link': 'http://tv.cctv.com/2012/12/16/VIDE1355596307576901.shtml' }]},
{'county': '龙陵', 'color': 'green', 'links': [{'name': '30.多彩边城保山', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718584294.shtml' }]},
{'county': '保山', 'color': 'blue', 'links': [{'name': '30.多彩边城保山', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718584294.shtml' }]},
{'county': '泸水', 'color': 'green', 'links': [{'name': '31.边城片马', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718692315.shtml' }]},
{'county': '福贡', 'color': 'green', 'links': [{'name': '32.魅力怒江', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718783337.shtml' }]},
{'county': '贡山', 'color': 'green', 'links': [{'name': '33.秘境独龙江', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718869350.shtml' }]},
{'county': '香格里拉', 'color': 'blue', 'links': [{'name': '34.心中的日月——香格里拉', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298718942370.shtml' },{'name': '35.梦境之地香格里拉', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298719087391.shtml' }]},
{'county': '德钦', 'color': 'blue', 'links': [{'name': '36.走进高原明珠——德钦', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298719199408.shtml' },{'name': '37.人杰地灵之地——德钦', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298719470436.shtml' }]},
{'county': '察隅', 'color': 'yellow', 'links': [{'name': '38.森林秘境察隅', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298719653473.shtml' }]},
{'county': '八宿', 'color': 'blue', 'links': [{'name': '39.壮美八宿', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298719729490.shtml' }]},
{'county': '波密', 'color': 'blue', 'links': [{'name': '40.绿海明珠波密', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298719821516.shtml' }]},
{'county': '林芝', 'color': 'blue', 'links': [{'name': '41.雪域江南林芝', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720257628.shtml' }]},
{'county': '米林', 'color': 'blue', 'links': [{'name': '42.米林深呼吸', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720329646.shtml' }]},
{'county': '加查', 'color': 'blue', 'links': [{'name': '43.藏南明珠——加查', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720409671.shtml' }]},
{'county': '曲松', 'color': 'blue', 'links': [{'name': '44.从曲松到乃东', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720553695.shtml' }]},
{'county': '扎囊', 'color': 'blue', 'links': [{'name': '44.从曲松到乃东', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720553695.shtml' }]},
{'county': '乃东', 'color': 'blue', 'links': [{'name': '45.寻找藏文化起源', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720655710.shtml' }]},
{'county': '措美', 'color': 'blue', 'links': [{'name': '46.措美：寻找藏野驴', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720747727.shtml' }]},
{'county': '隆子', 'color': 'blue', 'links': [{'name': '47.寻访中国最小的乡', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720844747.shtml' }]},
{'county': '错那', 'color': 'yellow', 'links': [{'name': '48.错那错觉', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298720930767.shtml' }]},
{'county': '贡嘎', 'color': 'blue', 'links': [{'name': '49.美丽山南', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298721013785.shtml' }]},
{'county': '浪卡子', 'color': 'green', 'links': [{'name': '49.美丽山南', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298721013785.shtml' }]},
{'county': '江孜', 'color': 'blue', 'links': [{'name': '50.江孜岁月', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298721110808.shtml' }]},
{'county': '萨迦', 'color': 'blue', 'links': [{'name': '51.行走古城萨迦', 'link': 'http://tv.cctv.com/2013/01/04/VIDE1357298721210829.shtml' }]},
{'county': '拉孜', 'color': 'blue', 'links': [{'name': '52.走读多彩拉孜', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721047421549.shtml' }]},
{'county': '定日', 'color': 'green', 'links': [{'name': '53.品读高原两极之美', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721050802623.shtml' }]},
{'county': '聂拉木', 'color': 'green', 'links': [{'name': '54.七彩风情聂拉木', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721053374451.shtml'}]},
{'county': '普兰', 'color': 'yellow', 'links': [ {'name': '55.边城普兰', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721055144944.shtml'}, {'name': '56.天上阿里', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721057785780.shtml'}]},
{'county': '札达', 'color': 'green', 'links': [{'name': '57.千年古格，梦幻土林', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721061007726.shtml'}]},
{'county': '噶尔', 'color': 'green', 'links': [{'name': '58.阿里之旅，美丽羌塘', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721063790629.shtml'}]},
{'county': '喀什', 'color': 'blue', 'links': [{'name': '59.南疆古城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721066672507.shtml'}]},
{'county': '英吉沙', 'color': 'blue', 'links': [{'name': '59.南疆古城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721066672507.shtml'}]},
{'county': '塔什库尔干', 'color': 'red', 'links': [{'name': '60.帕米尔雄鹰', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721068971179.shtml'}]},
{'county': '乌恰', 'color': 'green', 'links': [{'name': '61.西陲边城乌恰', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069026195.shtml'}]},
{'county': '阿合奇', 'color': 'green', 'links': [{'name': '62.猎鹰部落', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069089211.shtml'}]},
{'county': '乌什', 'color': 'green', 'links': [{'name': '63.天山下的边城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069166227.shtml'}]},
{'county': '温宿', 'color': 'yellow', 'links': [{'name': '63.天山下的边城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069166227.shtml'}]},
{'county': '阿克苏', 'color': 'blue', 'links': [{'name': '64.沙漠边的绿洲', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069237244.shtml'}]},
{'county': '阿瓦提', 'color': 'blue', 'links': [{'name': '64.沙漠边的绿洲', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069237244.shtml'},{'name': '65.塔河边的传奇', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069237244.shtml'}]},
{'county': '阿拉尔', 'color': 'blue', 'links': [{'name': '65.塔河边的传奇', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721069237244.shtml'}]},
{'county': '库车', 'color': 'blue', 'links': [{'name': '66.从库车到拜城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721082991492.shtml'}]},
{'county': '拜城', 'color': 'blue', 'links': [{'name': '66.从库车到拜城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721082991492.shtml'}]},
{'county': '伊宁', 'color': 'green', 'links': [{'name': '67.塞外天府：伊宁，察布查尔', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721085965497.shtml'}]},
{'county': '察布查尔', 'color': 'green', 'links': [{'name': '67.塞外天府：伊宁，察布查尔', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721085965497.shtml'}]},
{'county': '昭苏', 'color': 'green', 'links': [{'name': '68.在那遥远的地方：昭苏，新源', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721088308150.shtml'}]},
{'county': '新源', 'color': 'blue', 'links': [{'name': '68.在那遥远的地方：昭苏，新源', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721088308150.shtml'}]},
{'county': '霍城', 'color': 'green', 'links': [{'name': '69.古城新姿——霍城', 'link': 'http://tv.cctv.com/2012/12/10/VIDE1355151065074659.shtml'}]},
{'county': '博乐', 'color': 'green', 'links': [{'name': '70.世外灵壤——博乐', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721092551468.shtml'}]},
{'county': '温泉', 'color': 'green', 'links': [{'name': '71.神山圣水温泉县', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721095347385.shtml'}]},
{'county': '塔城', 'color': 'green', 'links': [{'name': '72.离海洋最远的地方', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721098072303.shtml'}]},
{'county': '裕民', 'color': 'green', 'links': [{'name': '73.富饶美丽之地——塔城地区', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721100900184.shtml'}]},
{'county': '和布克赛尔', 'color': 'green', 'links': [{'name': '73.富饶美丽之地——塔城地区', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721100900184.shtml'}]},
{'county': '吉木乃', 'color': 'green', 'links': [{'name': '74.吉木乃奇遇记', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721100943199.shtml'}]},
{'county': '布尔津', 'color': 'yellow', 'links': [{'name': '75.大美喀纳斯', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721101953478.shtml'}]},
{'county': '富蕴', 'color': 'green', 'links': [{'name': '76.金山银水边疆情', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721103721202.shtml'}]},
{'county': '青河', 'color': 'green', 'links': [{'name': '76.金山银水边疆情', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721103721202.shtml'}]},
{'county': '阜康', 'color': 'blue', 'links': [{'name': '77.寻找天山雪莲', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721109606439.shtml'}]},
{'county': '奇台', 'color': 'green', 'links': [{'name': '78.丝路古城金奇台', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721113113674.shtml'}]},
{'county': '巴里坤', 'color': 'green', 'links': [{'name': '79.风情边城——哈密', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721115105343.shtml'}]},
{'county': '哈密', 'color': 'green', 'links': [{'name': '79.风情边城——哈密', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721115105343.shtml'}]},
{'county': '肃北', 'color': 'green', 'links': [{'name': '80.肃北掠影', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721115193359.shtml'}]},
{'county': '额济纳', 'color': 'green', 'links': [{'name': '81.漫步额济纳', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721115422390.shtml'}]},
{'county': '乌后旗', 'color': 'green', 'links': [{'name': '82.乌拉特采风', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721117512128.shtml'}]},
{'county': '乌中旗', 'color': 'green', 'links': [{'name': '82.乌拉特采风', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721117512128.shtml'}]},
{'county': '二连浩特', 'color': 'green', 'links': [{'name': '83.边贸新城二连', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721119620871.shtml'}]},
{'county': '阿尔山', 'color': 'green', 'links': [{'name': '84.小城阿尔山', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721120244194.shtml'}]},
{'county': '新右旗', 'color': 'yellow', 'links': [{'name': '85.草原牧歌', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721123032942.shtml'}]},
{'county': '满洲里', 'color': 'green', 'links': [{'name': '86.塞上明珠', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721123136966.shtml'}]},
{'county': '根河', 'color': 'blue', 'links': [{'name': '86.塞上明珠', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721123136966.shtml'}]},
{'county': '漠河', 'color': 'green', 'links': [{'name': '87.最北之旅', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721126873727.shtml'}]},
{'county': '呼玛', 'color': 'green', 'links': [{'name': '87.最北之旅', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721126873727.shtml'}]},
{'county': '黑河', 'color': 'green', 'links': [{'name': '88.中俄双子城——黑河', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721128328299.shtml'}]},
{'county': '五大连池', 'color': 'blue', 'links': [{'name': '88.中俄双子城——黑河', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721128328299.shtml'}]},
{'county': '逊克', 'color': 'green', 'links': [{'name': '89.行走边城逊克', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721133440866.shtml'}]},
{'county': '萝北', 'color': 'green', 'links': [{'name': '90.界江之都——萝北', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721133646897.shtml'}]},
{'county': '同江', 'color': 'green', 'links': [{'name': '91.东极之旅', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721134116950.shtml'}]},
{'county': '抚远', 'color': 'green', 'links': [{'name': '91.东极之旅', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721134116950.shtml'}]},
{'county': '饶河', 'color': 'green', 'links': [{'name': '92.三江福地', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721144926869.shtml'}]},
{'county': '宝清', 'color': 'blue', 'links': [{'name': '92.三江福地', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721144926869.shtml'}]},
{'county': '虎林', 'color': 'green', 'links': [{'name': '93.江湖之间', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721150719746.shtml'}]},
{'county': '密山', 'color': 'green', 'links': [{'name': '93.江湖之间', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721150719746.shtml'}]},
{'county': '牡丹江', 'color': 'blue', 'links': [{'name': '94.牡丹江上的风景', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721160786534.shtml'}]},
{'county': '宁安', 'color': 'blue', 'links': [{'name': '94.牡丹江上的风景', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721160786534.shtml'}]},
{'county': '海林', 'color': 'blue', 'links': [{'name': '95.铁路上的边城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721163823996.shtml'}]},
{'county': '绥芬河', 'color': 'green', 'links': [{'name': '95.铁路上的边城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721163823996.shtml'}]},
{'county': '东宁', 'color': 'green', 'links': [{'name': '96.绿色东宁', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721165952539.shtml'}]},
{'county': '珲春', 'color': 'yellow', 'links': [{'name': '97.秋赏延边', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721169795328.shtml'}]},
{'county': '图们', 'color': 'green', 'links': [{'name': '97.秋赏延边', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721169795328.shtml'}]},
{'county': '汪清', 'color': 'blue', 'links': [{'name': '97.秋赏延边', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721169795328.shtml'}]},
{'county': '延吉', 'color': 'blue', 'links': [{'name': '97.秋赏延边', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721169795328.shtml'}]},
{'county': '长白', 'color': 'green', 'links': [{'name': '98.醉美长白山', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721172988778.shtml'}]},
{'county': '抚松', 'color': 'green', 'links': [{'name': '98.醉美长白山', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721172988778.shtml'}]},
{'county': '本溪', 'color': 'blue', 'links': [{'name': '99.森林中的本溪', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721174775176.shtml'}]},
{'county': '本溪县', 'color': 'blue', 'links': [{'name': '99.森林中的本溪', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721174775176.shtml'}]},
{'county': '桓仁', 'color': 'blue', 'links': [{'name': '99.森林中的本溪', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721174775176.shtml'}]},
{'county': '宽甸', 'color': 'green', 'links': [{'name': '100.鸭绿江畔的边城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721188236240.shtml'}]},
{'county': '丹东', 'color': 'green', 'links': [{'name': '100.鸭绿江畔的边城', 'link': 'http://tv.cctv.com/2014/04/17/VIDE1397721188236240.shtml'}]},
];