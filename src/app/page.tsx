'use client'
import Loading from "@/components/loading";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Home() {

  const toPage = useRouter()


  const [_hidden, set_hidden] = useState<boolean>(false)
  const [_index, set_index] = useState<number>(-1)

  useEffect(() => {
    setTimeout(() => {
      set_hidden(true)
    }, 3000);
  }, [])
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup để tránh leak memory khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const beers = [
    {
      img: "/logo/beer_01.png",
      name: "HOPDOG BREWING",
      add: "秋田 / 秋田市",
      content: `85年以上続いた秋田市最後の銭湯「星の湯」(2021年2月閉店)をリノベーションして、クラフトビール・ハードサイダー醸造所を設立。<br> 
      2023創業。「秋田の原料を使った製品を多くの人に届けることで、人生と食卓をもっと豊かにしたい」というミッションを掲げ、横手産ホップや秋田県内産果実の調達に日々奔走しています。`
    },
    {
      img: "/logo/beer_02.png",
      name: "TEGAMISHA BREWERY",
      add: "東京 / 調布",
      content: `「関西蚤の市」やみやこメッセで開催の「紙博 in 京都」などイベント運営、カフェ・雑貨店を展開する「手紙社」が、東京都調布市にオープンしたクラフトビールのお店で2023年6月より醸造を開始しました。
      <br>皆様に美味しいと感じていただけるようなビールを目指して醸造してます。
`
    },
    {
      img: "/logo/beer_03.jpg",
      name: "Nobara Homestead Brewery",
      add: "長野 / 青木村",
      content: `信州青木村の山麓で、夫婦二人で2022年に創業した小さな醸造所、Nobara Homestead Breweryです。この地の気候風土と生態系が生み出す多様な素材を尊重し、食と文化、自然と暮らしが調和する世界を多くの人々と共有したいという想いのもと、麦酒づくりに取り組んでいます。
      <br>このたび、京都に初出店いたします。歴史と文化、そして自然が美しく調和したこの特別な場所で、皆様との出会いを楽しみにしています。
`
    },
    {
      img: "/logo/beer_04.png",
      name: "West Coast Brewing",
      add: "静岡 / 用宗",
      content: `
      Hop Dude一族が生息する、静岡市用宗（もちむね）漁港のクラフトビール醸造所『West Coast Brewing（WCB）』。<br>
      2019年6月に免許を取得し、同年7月に醸造をスタート。私たちが目指しているのは、クラフトビールの本場であり、オーナーの故郷でもあるアメリカのビール。<br>
      ホップの香りを効かせた、さまざまなスタイルのビールを造り、現在は毎週新作をリリースしています。

`
    },
    {
      img: "/logo/beer_05.png",
      name: "Repubrew",
      add: "静岡 / 沼津 ",
      content: `
「ないものを作る」をモットーに、ビールを通して「新しい発見」を届けるクラフトビールメーカー。<br>
2017年に沼津駅前ブリューパブから始まり、2023年3月には、太陽光と富士箱根水系天然水を利用した新工場「Natural Roots Studio」を三島にスタート。<br>
2つの工場を最大限に活かし、私たちだからできるビールをお届けします。
`

    },
    {
      img: "/logo/beer_06.jpg",
      name: "ワイマーケット・ブルーイング",
      add: "愛知 / 名古屋 ",
      content: `
      2014年名古屋駅のほど近くで誕生したクラフトビール醸造所。「柳橋（Y）中央卸売市場（MARKET）」がその名の由来。<br>
自分たちの『飲みたい』を追求し、これまでに500種類以上のビールを醸造してきました
。自分たちがクラフトビールを初めて飲んだときに感じた驚きと感動、そしてビールの楽しさをもっと多くの人に感じていただきたい。
ビールって最高に楽しい！！」<br>
そんな想いがいっぱいに詰まったクラフトビールをぜひご賞味ください。
`
    },
    {
      img: "/logo/beer_07.jpg",
      name: "アルデアやましろビールズ",
      add: "京都 / 京田辺",
      content: `
      自然豊かな京都府南部・山城地域でスタートし、魅力的な地産を活かしたクラフトビールです！ <br>
      カリフォルニアで暮らしながら経験した、個性的で自由な、地産を活かしたクラフトビール造りを始めています。 <br>
      山城地域の想い、特産の茶葉や地産フルーツの魅力が詰まった新鮮な。
`
    },
    {
      img: "/logo/beer_08.png",
      name: "ウッドミルブルワリー・京都",
      add: "京都 / 今出川 ",
      content: `
      「京都人がつくる、京都の地ビール」<br>
お風呂上がりにガブガブッ！プハーッ！と豪快にサワヤカに飲めるビールを揃えて皆さまのお越しをお待ちしております！
`
    },
    {
      img: "/logo/beer_09.png",
      name: "Kyoto Brewing",
      add: "京都 / 十条",
      content: `
     京都醸造は、2015年に京都市・十条で創業したクラフトビール醸造所で、2025年に10周年を迎えます。<br>
創業当時からハウス酵母であるベルギー酵母にモダンなホップを掛け合わせたビールを造っています。
また、2024年には新しいヘッドブリュワーを迎え、引き続き美味しいビールの醸造はもちろん、品質や醸造技術の向上に尽力しています。<br>
バラエティー豊かな限定ビールはもちろん、レシピを一新しグレードアップした定番の3種類を今一度お楽しみいただければ幸いです。

`
    },
    {
      img: "/logo/beer_10.jpg",
      name: "KYOTO NUDE BREWERY",
      add: "京都 / 京北",
      content: `
      私たちは京都市内でクラフトビールの飲食店を3店舗運営しております。 <br>
      そこから自家醸造をしたい、世界に向けて挑戦したい、という思いより、京都にてBREWERYをつくることを決意。<br>
      2023年9月より醸造開始。 京都市内ではありながらも豊かな森に囲まれた【森の京都】と呼ばれる京北という地域。 
      北山杉という杉の木が広がった森を身近に感じながら、ビールと共に皆様に豊かな自然の空気感や一次産業豊かなこの地域を皆様に知ってもらえればと思いこの場所にて醸造所を作っております。
`
    },
    {
      img: "/logo/beer_11.jpg",
      name: "家守堂",
      add: "京都 / 伏見",
      content: `
地元に愛され続けた日本茶専門店「安本茶舗」を継承し、築150年の町家をリノベーション。<br>
明るく開放的なブリューパブが生まれた。技術に裏打ちされた高い品質を維持しながら、インパクトと飲みやすさを兼ね備えたビールを造っている。<br>
フラッグシップの「Chakabuki」は、宇治産の雁ヶ音茶と柚子の果皮を使ったセゾン。
`
    },
    {
      img: "/logo/beer_12.png",
      name: "銭湯醸造 上方ビール",
      add: "大阪 / 淡路",
      content: `
セントウジョウゾウ　カミガタビール 大阪 淡路銭湯跡地をリノベーションした日本初の銭湯ビール醸造所。<br>
多様化する様々な食に合うビールを造り、同じ味は作らず常に新しいビールを造っています。
`

    },
    {
      img: "/logo/beer_13.png",
      name: "Derailleur Brew Works",
      add: "大阪 / 西成",
      content: `
Derailleur Brew Worksはフランス語で「道を外す者＝生き方を自分で選ぶ者」を意味するディレイラを冠し、常識や一本道に囚われない発想やマインドで、ビールを作り続けていくことを信念としています。<br>
昨年に引き続きヘッドブルワー沖吉が美味しいビールをご用意して、みなさんのご来店をお待ちしています!!

`
    },
    {
      img: "/logo/beer_14.jpg",
      name: "箕面ビール",
      add: "大阪 / 箕面",
      content: `
1997年から箕面の地で製造をスタートしたローカルブルワリーです。<br>
クラシックなスタイルをスタンダードとし、また地元の名産である柚子や近隣の果物を使ったビールや、自然酵母や酒米麹を使ったビールなど季節にあわせて様々なスタイルを醸造。<br>
歴史や伝統を重んじつつ、常に新しい発見と楽しさをビールに反映し、箕面ビールにしかない個性を日々追求しています。
そして「ビールを醸して、人を醸す」をモットーに、ローカルビールが、デイリービールになる日を目指しています。
`

    },
    {
      img: "/logo/beer_15.png",
      name: "イーグレブルワリー",
      add: "兵庫 / 姫路市",
      content: `
      兵庫県から来ましたイーグレブルワリーです！<br>
      姫路城のお膝元、姫路市初のクラフトビール醸造所です。お風呂上がりにグビグビ飲める美味しいビールをたっぷりお持ちしました。<br>
      一緒に乾杯しましょうー♪
`
    },
    {
      img: "/logo/beer_16.png",
      name: "NOMCRAFT BREWING",
      add: "和歌山 / 有田川",
      content: `
      ノムクラフトブリューイング 和歌山 有田川僕らは「クラフトビールでまちづくり」という大きなプロジェクトにも挑んでいます。<br>
      保育所だった建物の一角をリノベーションし立ち上げたNomcraft Brewing。<br>
      メンバーそれぞれが惚れ込んだ有田川町。<br>
      この小さな町とクラフトビールシティ・ポートランドとの連携によるまちづくり。ビールと合わせて僕らの「クラフトビールでまちづくり」が目指すところをお伝えできればうれしいです！

`

    },
    {
      img: "/logo/beer_17.png",
      name: "CHORYO Craft Beer",
      add: "奈良 / 広陵町",
      content: `
      チョウリョウクラフトビール 奈良 広陵町奈良県で日本酒・クラフトビールを醸造しており、毎月様々な新商品を発売しています。<br>
定番のライスラガーをはじめ、バラエティ豊かな商品をお持ちします！<br>
何が飲めるかは当日のお楽しみ��リリースはＳＮＳで随時発信していますので、要チェックです！
`
    },
    {
      img: "/logo/beer_18.png",
      name: "奈良醸造",
      add: "奈良 / 大和郡山",
      content: `
      2018年6月から奈良市にて醸造を開始した、「ビールを選ぶ楽しみを！」がモットーの奈良醸造です。
      <br>クラシカルなビアスタイルから、地元奈良の酒蔵をはじめとした様々なメーカーとのコラボレーションなど、多種多様なビール造りを行っています。
`
    },
    {
      img: "/logo/beer_19.png",
      name: "RISE＆WIN Brewing Co./KAMIKATZ BEER",
      add: "徳島 / 上勝町",
      content: `
      美味しいビールを楽しむだけで「環境にちょっと良いコト」に繋がっている。<br>
地球規模で巻き起こっている環境問題に対して、いち早く行動を起こしていた人口1,400人足らずの町、上勝町。
小さな町で始まった “ゼロ・ウェイスト” の活動を、気軽にビールを楽しみながらより多くの人たちに知ってほしい。そんな想いから、私たちのクラフトビール作りは始まりました。<br>
私たちは、KAMIKATZビールが “ゼロ・ウェイスト” 活動を自分事化するための手段と捉え、“JUST DRINK KAMIKATZ BEER” を発信し続けています。
`
    },
    {
      img: "/logo/beer_20.webp",
      name: "DD4D BREWING",
      add: "愛媛 / 松山",
      content: `
1998年にセレクトショップとして愛媛県松山市に誕生したDD4D、
「常識に捉われず、自分の信じる道を行く」という代表の想いをもとに、2019年よりクラフトビールの製造をスタートし、
これまで数百種類のビールを全国、海外に販売。スポーツ、アパレル、製菓、映画など業界を越えたコラボにも多数取り組んでいる。
`
    },
    {
      img: "/logo/beer_21.png",
      name: "しまなみブルワリー",
      add: "広島 / 尾道",
      content: `
広島から参戦の「しまなみブルワリー」です！<br>
ハートランド、一番搾りの生みの親である山田一己のもとで長年修行した後、クラフトラガーを追求すべく地元の広島でしまなみブルワリーを立ち上げました。<br>
定番のラガーの他にも、アイスクリームを使ったものやビール醸造技術で造ったレモンサワーなど楽しんでもらえるものをたくさんご用意してます！<br>
新商品のラガーも、お披露目します！<br>
ぜひ、飲みにきてください！
`
    },
    {
      img: "/logo/beer_22.jpg",
      name: "別府ブルワリー",
      add: "大分 / 別府",
      content: `
2022年11月に初めて醸造を開始した大分県別府市で唯一のクラフトビール醸造所です。<br>
別府観光のお土産だけにとどまらない、全国から別府へ人を呼び寄せるようなクラフトビールづくりを行っています。“湯あがり”をコンセプトに醸造したオリジナリティ溢れるクラフトビールで「旅を潤す」至福の時間をお届けします。<br>
「京都湯上がりクラフトビール祭」で湯上りのビールを通して京都の皆さまと繋がれればと思い参加させて頂きました。
`
    },
  ]
  const foods = [
    {
      img: "/logo/food_01.jpg",
      name: "はるまき家",
      add: "石川 / 金沢",
      content: `
北陸初の春巻き専門店。2021年9月に70歳になる母ちゃんとキッチンカーで起業。<br>
累計販売本数は 20万本。家族3人で 石川県を代表とするグルメを目指して 春巻きに夢を包みます。<br>
記念すべき京都初出店です。
`
    },
    {
      img: "/logo/food_02.png",
      name: "INDIA GATE",
      add: "京都 / 四条烏丸",
      content: `
      ビリヤニ <br> 
      スパイスおつまみ
`
    },
    {
      img: "/logo/food_03.jpg",
      name: "火曜腸詰倶楽部",
      add: "京都 / 烏丸御池",
      content: `
      京都市内の20代の同世代の飲食店員が集まってソーセージ作りを通して新しい挑戦や新しい繋がりの出来るコミュニティの場として結成された秘密結社が"火曜腸詰倶楽部"です。<br>
      美味しいソーセージを皆様に届けたい 京都の名産物や調味料、季節ごとの旬の食材また、王道な組み合わせから新しい挑戦まで幅広いソーセージを作っております。<br>
      そして、盛り付けや組み合わせで さらにソーセージの可能性を伝えたいという気持ちで取り組んでいきます。
`
    },
    {
      img: "/logo/food_04.png",
      name: "スタンドうみねこコト",
      add: "京都 / 河原町",
      content: `
京都河原町駅から徒歩5分。<br>
Derailleur Brew Works直営店 スタンドうみねこ コト。<br>
古民家を改装した店内には、最大35TAPの圧巻のビアサーバーに加え、壁一面に広がるショーケースにはクラフトビールがずらり！もちろんお土産に購入も可能です。<br>
今回のイベントではビールにぴったりのどて煮と燻製のアテをご用意してお待ちしております!<br>
当店自慢のおいしいアテを是非ご賞味ください！
`
    },
    {
      img: "/logo/food_05.png",
      name: "DE FRITES STAAN",
      add: "京都 / 新京極",
      content: `
阪急京都河原町駅から徒歩3分、新京極公園近くのフリッツ（フライドポテト）専門店です！<br>
昨年は人気で完売したフリッツ、ポテト大国オランダのスタイルの味をご堪能ください。<br>
自家製オリジナルディップも絶品です！！！
`
    },
    {
      img: "/logo/food_06.jpg",
      name: "ボクとおじいちゃん",
      add: "京都 / 山科",
      content: `
——かつておじいちゃんが大切にしていた倉庫を孫である「ボク」が受け継ぎ、温もりのある山小屋風のカフェに。<br>
エスニックなグリーンカレーやガパオライス、ほっとする豚汁付きおにぎりセット。<br>
気軽に立ち寄れて、誰かと話したくなる、そんな場所です。<br>
おじいちゃんの思い出と、新しいつながりが交差するカフェで、あなたの時間をゆっくり過ごしてみませんか？
`
    },
    {
      img: "/logo/food_07.jpg",
      name: "麺処 虵の目屋",
      add: "京都 / 河原町",
      content: `
京都随一の繁華街、河原町にある人気ラーメン店地鶏と生揚げ醤油、自家製麺にこだわった上品で洗練された味わいを演出します。<br>
今回はクラフトビールに合わせて限定コラボ商品を提供します。
`
    },
    {
      img: "/logo/food_08.jpg",
      name: "モグラと夕陽",
      add: "京都 / 山科",
      content: `
はじめまして！ モグラと夕陽と申します！ <br>
「6種類のタルタルから選べる京都唯一のチキン南蛮のお店」をキャッチフレーズに山科清水焼団地で店舗を構えております！<br>
自慢のチキン南蛮とタルタルを是非ご賞味下さい！
`
    },
    {
      img: "/logo/food_09.png",
      name: "NITO Coffee&Craft Beer",
      add: "大阪 / 大阪市",
      content: `
      NITO Coffee&Craft Beer 「昼からビール、夜までコーヒー」がコンセプトの、 国内外から厳選された多種多様なクラフトビールと、全国各地の有名ロースターの コーヒーがたのしめるお店です。<br>
       自家焙煎のコーヒーや自家製造の焼菓子もあり、 コーヒーはもちろんビールにも合わせたペアリングを提供しています
`
    },
    {
      img: "/logo/food_10.jpg",
      name: "旬菜中華バル ミツカン",
      add: "奈良 / 橿原",
      content: `
奈良県橿原市にある夫婦で営む中華居酒屋です。 <br>
ミツカンは四川麻婆豆腐や旬の野菜で作る創作中華、お酒を楽しめるお店です。 2024年ミシュランビブグルマン獲得。<br>
ビール祭り当日はお店で人気の、ばあく豚の肉焼売や海老チリ、ルーロー飯などを用意します。<br>
どれもビールに合う料理なんで是非楽しみにしててください。
`
    },
  ]
  const kitchens = [
    {
      img: "/logo/ga_01.png",
      name: "Gori’s Kitchen",
      add: "ピザ",
      content: `
京都南区、十条大宮のイタリアンレストランゴリーズキッチン。<br>
なんとゴリーズキッチンのキッチンカーが登場！<br>
本場イタリアの窯で焼く本格ナポリピッツァです。
`
    },
    {
      img: "/logo/ga_02.png",
      name: "RUDE BURGER CLUB",
      add: "ハンバーガー",
      content: `
      当店は肉肉しいパティにこだわりがあります。<br>
極粗挽きのミンチに手切りしたゴロゴロ食感のブロック肉を組み込み、ビーフ100%のジューシーさをお楽しみいただけるよう仕上げました。<br>
溢れ出す肉汁をこだわりのバンズと新鮮野菜で美味しく整えた本格的なグルメバーガーを是非ご賞味下さい。

      `
    },
    {
      img: "/logo/ga_03.jpg",
      name: "森のひとやすみ",
      add: "たこ焼き、焼きそば",
      content: `
昨年もクラフトビールイベントに参加させて頂きましたキッチンカー森のひとやすみです！<br>
今年もご出店させていただけることになりました！<br>
昨年とは少しメニューも変わり、たこ焼きの味も8種類となり、盛りだくさんになりました！<br>
今年も前回好評だった焼きそばも販売させて頂きます！<br>
新メニューとして　台湾スイーツQQボールも販売予定です！<br>
<br>
今年もお客様に喜んでいただけるよう頑張りたいと思っております！<br>
よろしくお願い致します🐻
`
    },
  ]
  const stores = [
    {
      img: "/logo/beer_12.png",
      name: "銭湯醸造 上方ビール",
      add: "大阪 / 淡路",
      content: `
セントウジョウゾウ　カミガタビール 大阪 淡路銭湯跡地をリノベーションした日本初の銭湯ビール醸造所。<br>
多様化する様々な食に合うビールを造り、同じ味は作らず常に新しいビールを造っています。
`
    },
    {
      img: "/logo/store_02.jpg",
      name: "Free Spirits Brewing",
      add: "兵庫 / 姫路",
      content: `
Free Spirits Brewing（フルースピッツブリューイング）は2022年10月から姫路でビール醸造を開始しました。<br>
Free Spiritsは【自由気まま】を意味し、固定観念に捉われないビール作りをすることをモットーに新しいビール造りに挑戦するブルワリーです。<br>
クラフトビールを通じてイベントを盛り上げられるように精一杯頑張ります。<br>
よろしくお願いいたします。
`
    },
    {
      img: "/logo/beer_11.jpg",
      name: "家守堂",
      add: "京都 / 伏見",
      content: `
地元に愛され続けた日本茶専門店「安本茶舗」を継承し、築150年の町家をリノベーション。<br>
明るく開放的なブリューパブが生まれた。技術に裏打ちされた高い品質を維持しながら、インパクトと飲みやすさを兼ね備えたビールを造っている。<br>
フラッグシップの「Chakabuki」は、宇治産の雁ヶ音茶と柚子の果皮を使ったセゾン。
`
    },
    {
      img: "/logo/beer_14.jpg",
      name: "箕面ビール",
      add: "大阪 / 箕面",
      content: `
1997年から箕面の地で製造をスタートしたローカルブルワリーです。<br>
クラシックなスタイルをスタンダードとし、また地元の名産である柚子や近隣の果物を使ったビールや、自然酵母や酒米麹を使ったビールなど季節にあわせて様々なスタイルを醸造。<br>
歴史や伝統を重んじつつ、常に新しい発見と楽しさをビールに反映し、箕面ビールにしかない個性を日々追求しています。
そして「ビールを醸して、人を醸す」をモットーに、ローカルビールが、デイリービールになる日を目指しています。
`
    },
  ]
  const stores_2 = [
    {
      img: "/logo/store_2_01.jpg",
      name: "一乗寺ブリュワリー",
      add: "京都 / 一乗寺",
      content: `
一乗寺ブリュワリーは、 自分らしく生きる人たちに飲んでほしいクラフトビールです。<br>
比叡山の麓にて、伝統的な味わいの中に新しい驚きを秘めた京都らしいビール造りを目指しています。
`
    },
    {
      img: "/logo/store_2_02.png",
      name: "Bighand Bros. Beer",
      add: "京都 / 西陣",
      content: `
Clap your big hands! <br>
クラフツマンシップの町、京都西陣。地下を採掘してつくった秘密基地のような醸造所で、ビールギークなモグラの兄弟が日夜至高のビールを求めて探究を続けています。<br>
イギリススタイルをベースにした、食事にもスイーツにも相性抜群な、毎日を豊かにするビール。<br>
そんなビールを生み出すことに情熱を注いでいます。<br>
さあ、グラスにビールを注いだら、すばらしい今日に祝福を。おいしいビールに拍手と喝采を。
`
    },
    {
      img: "/logo/store_2_03.png",
      name: "AQベボリューション",
      add: "東京 / 大塚",
      content: `
AQベボリューションは創業13年目を迎える海外クラフトビール輸入会社です。<br>
現在は、アメリカ、カナダ、イングランドの世界トップクラスのブルワリー10社と輸入契約を結び、日本中へお届けしております。<br>
我々の目的は、日本の皆さんが持つグラスに、ハイクオリティのクラフトビールをなみなみと注ぐことです！<br>
京都でこのような機会をいただきとても楽しみにしております。魅力的なビールをご用意しておりますので、ぜひお立ち寄りください！
`
    },
    {
      img: "/logo/store_2_04.png",
      name: "OUR BREWING",
      add: "福井 / 福井市",
      content: `
福井生まれのOUR BREWINGは、醸造開始1年目から国際的大会で金賞を受賞した実力派ブルワリー。<br>
飲んだ人の心が弾み、隣にいる人と自然に打ちとける、そんなつながりを生み出すビールを福井から世界にお届けします。<br>
<br>
福井県出身の2人の醸造家が、地域と調和しつつ、アイデア豊かな様々なスタイルのビールを醸造しています。ぜひご賞味ください！
`
    },
  ]
  const stores_3 = [
    {
      img: "/logo/store_3_01.jpg",
      name: "長濱浪漫ビールHOP三条木屋町",
      add: "滋賀 / 長浜",
      content: `
長濱浪漫ビールは滋賀県長浜市で1996年に創業、伊吹山の雪解け水が育む豊かな自然。<br>
そんな長浜の地で生まれた歴史情緒あふれる街並みに佇むビール工場併設レストランです。<br>
創業以来、県内外の皆様から愛され続ける定番ビールの味わいを守りつつ、日々新しい限定ビールの醸造に挑戦しています。昨年三条木屋町に県外初のブルワリー直営パブがオープンしました。京都の方にもっと知っていただきたく、今回のイベントは美味しいビー
ルを提供させてもらいます！

`
    },
    {
      img: "/logo/store_3_02.jpg",
      name: "日々一泡ブルワリー",
      add: "大阪 / 福島",
      content: `
大阪福島の高架下に新たに開業した、“日常にひと泡吹かせる醸造所”「日々一泡ブルワリー」です。<br>
新しいブルワリーで初めて自分たちで醸造したビールをお持ちします。<br>
ファーストバッチを一緒に味わってください！
`
    },
    {
      img: "/logo/beer_17.png",
      name: "CHORYO Craft Beer",
      add: "奈良 / 広陵町",
      content: `
      チョウリョウクラフトビール 奈良 広陵町奈良県で日本酒・クラフトビールを醸造しており、毎月様々な新商品を発売しています。<br>
定番のライスラガーをはじめ、バラエティ豊かな商品をお持ちします！<br>
何が飲めるかは当日のお楽しみ��リリースはＳＮＳで随時発信していますので、要チェックです！
`
    },
    {
      img: "/logo/store_3_04.jpg",
      name: "大和醸造",
      add: "奈良 / 奈良市",
      content: `
奈良から来た大和醸造です。近鉄奈良駅前に醸造所を構え醸造を始めて5年です。<br>
ドリンカブルで2杯、3杯と飽きの来ないビール造りを目指しています。</br>
是非一度この機会に飲みに来て下さい。<br>
乾杯！！

`
    },
  ]
  const stores_4 = [
    {
      img: "/logo/beer_01.png",
      name: "HOPDOG BREWING",
      add: "秋田 / 秋田市",
      content: `85年以上続いた秋田市最後の銭湯「星の湯」(2021年2月閉店)をリノベーションして、クラフトビール・ハードサイダー醸造所を設立。<br> 
      2023創業。「秋田の原料を使った製品を多くの人に届けることで、人生と食卓をもっと豊かにしたい」というミッションを掲げ、横手産ホップや秋田県内産果実の調達に日々奔走しています。`
    },
    {
      img: "/logo/beer_05.png",
      name: "Repubrew",
      add: "静岡 / 沼津 ",
      content: `
「ないものを作る」をモットーに、ビールを通して「新しい発見」を届けるクラフトビールメーカー。<br>
2017年に沼津駅前ブリューパブから始まり、2023年3月には、太陽光と富士箱根水系天然水を利用した新工場「Natural Roots Studio」を三島にスタート。<br>
2つの工場を最大限に活かし、私たちだからできるビールをお届けします。
`
    },
    {
      img: "/logo/beer_21.png",
      name: "しまなみブルワリー",
      add: "広島 / 尾道",
      content: `
広島から参戦の「しまなみブルワリー」です！<br>
ハートランド、一番搾りの生みの親である山田一己のもとで長年修行した後、クラフトラガーを追求すべく地元の広島でしまなみブルワリーを立ち上げました。<br>
定番のラガーの他にも、アイスクリームを使ったものやビール醸造技術で造ったレモンサワーなど楽しんでもらえるものをたくさんご用意してます！<br>
新商品のラガーも、お披露目します！<br>
ぜひ、飲みにきてください！
`
    },
    {
      img: "/logo/beer_02.png",
      name: "TEGAMISHA BREWERY",
      add: "東京 / 調布",
      content: `「関西蚤の市」やみやこメッセで開催の「紙博 in 京都」などイベント運営、カフェ・雑貨店を展開する「手紙社」が、東京都調布市にオープンしたクラフトビールのお店で2023年6月より醸造を開始しました。
      <br>皆様に美味しいと感じていただけるようなビールを目指して醸造してます。
`
    },
  ]
  const stores_food = [
    {
      img: "/logo/store_4_01.png",
      name: "hinami（ホットドッグ）",
      add: "京都 / 丸太町 ",
      content: `
      ヒナミ<br>
      パン　ホットドック<br>
      `
    },
    {
      img: "/logo/store_4_02.png",
      name: "OKAWARI POPCORN",
      add: "鳥取 / 倉吉 ",
      content: `
      オカワリポップコーン<br>
クラフトポップコーン<br>
<br>
初めまして。鳥取県の小さな手作りポップコーン専門店です。<br>
希少な国産とうもろこしを使用した、20種類以上のオリジナルフレーバーをご用意しております。<br>
イチオシは鳥取食材で味付けした無添加の鳥取ポップコーンシリーズ。<br>
そのほか、おつまみ系～スイーツ系まで20種類以上。あなたのお気に入りを見つけてください！
      `
    },
    {
      img: "/logo/store_4_03.png",
      name: "こぐま商店（おかき）",
      add: "大阪 / 河内長野 ",
      content: `
      コグマショウテン<br>
      おかき<br>
      <br>
      自分達が美味しい楽しいと感じた商品と出会い、時には生み出し、熊のキャラクターと共に歩ませる。<br>
      見知らぬ街に弊社の熊が闊歩する事が嬉しくて日々邁進しております。そんなこぐま商店を宜しくお願い申し上げます。
      `
    },
  ]
  const menus = [
    {
      name: "TOP",
      link: "/#"

    },
    {
      name: "ABOUT",
      link: "#about"
    },
    {
      name: "BREWERY",
      link: "#beer"
    },
    {
      name: "FOOD",
      link: "#food"
    },
    {
      name: "EVENT",
      link: "#event"
    },
  ]
  return (
    <>
      <Loading hidden={_hidden} />
      <div className={`hidden lg:block lg:fixed p-4 lg:w-1/6 z-[2] top-0 h-full left-0 transition-all duration-300 ease-in-out ${scrollY > 200 && scrollY < 1200 ? " opacity-0" : " opacity-100"}`}>
        <Image src={"/img/menu_logo.png"} width={500} height={500} className="h-auto w-full  max-w-[250px] m-auto" alt="foam" />
        {menus.map((beer, index) =>
          <div className="text-white text-2xl pl-8 mt-3 cursor-pointer " style={{ fontFamily: 'Dela Gothic One' }} onClick={() => toPage.push("/" + beer.link)} key={index}>{beer.name}</div>
        )}
      </div>
      <div className="relative bg-cl-1 z-0">

        <div className="sticky -top-[700px] lg:-top-[500px] w-full h-max md:flex z-0">
          <div className="hidden lg:block p-4 lg:w-1/6"></div>
          <div className="absolute left-0  top-[675px] w-full z-[2] max-w-[575px]">
            <Image src={"/img/infor_left.png"} width={500} height={500} className=" !w-9/12 ml-0" alt="foam" />
          </div>
          <div className="h-max w-full lg:w-4/6 relative  bg-cl-1 z" >
            <div className={`w-full transition-all duration-1000 overflow-hidden h-[900px] flex flex-col justify-center m-auto translate-y-[-15%] sm:translate-y-[0%]`}>
              <Image src={"/img/mainlogo.png"} width={500} height={500} className={`w-3/4 max-w-[450px] h-auto m-auto my-12 z-[1] relative ${_hidden ? "scale_animation" : ""}`} alt="cover1" />
            </div>
            <div className="absolute top-0 w-full h-[450px] z-[1]">
              <Image src={"/img/Illust_web_top.png"} width={500} height={500} className="w-full max-w-[900px] m-auto" alt="foam" />
            </div>
            <div className="absolute bottom-0 w-full h-[450px] z-[1]">
              <Image src={"/img/Illust_web_bottom.png"} width={500} height={500} className="w-full max-w-[900px] m-auto" alt="foam" />
            </div>
          </div>
          <div className="hidden lg:block p-4 lg:w-1/6">
          </div>
          <div className="absolute right-0 top-[900px] lg:top-[550px] w-full z-[1] max-w-[375px]">
            <Image src={"/img/infor_right.png"} width={500} height={500} className="h-full !w-auto ml-auto mr-0" alt="foam" />
          </div>
        </div>

        <div className="h-[768px] lg:h-96 max-w-[768px] w-full m-auto flex flex-col justify-center sticky top-0 ">
        </div>

        <div className=" overflow-x-hidden relative z-[1]">
          <div className={`h-max w-[200vw] flex loading_row`}>
            <Image src={"/img/foam_v2.png"} width={500} height={500} className="w-full h-1/2 " alt="foam" />
            <Image src={"/img/foam_v2.png"} width={500} height={500} className="w-full h-1/2 " alt="foam" />
            <Image src={"/img/foam_v2.png"} width={500} height={500} className="w-full h-1/2 " alt="foam" />
            <Image src={"/img/foam_v2.png"} width={500} height={500} className="w-full h-1/2 " alt="foam" />
          </div>
        </div>
        <div className="bg-cl-0 p-4 text-center sticky top-0 z-[3] text-white ">
          <div id="about" className="flex flex-col justify-center h-96 w-full max-w-[768px] m-auto">
            <div className="h-12 max-w-[768px] m-1/2 text-white rounded-md flex flex-col justify-center text-center my-12  font-bold text-4xl md:text-5xl m-auto mt-24" style={{ fontFamily: 'Dela Gothic One' }}>
              ABOUT
            </div>
            <div className="text-center text-2xl font-bold m-4 text-white">京都湯上がりクラフトビール祭 2025 開催決定！</div>
            <p className=" text-white">
              【クラフトビール×銭湯×紙芝居？！】第3回 「京都湯上がりクラフトビール祭 2025」開催決定！<br></br>
              2025年5月3日（土・祝）、4日（日・祝）に京都市・伏見の力の湯に隣接する「フットサルコート内」で行います。
            </p>
          </div>
          <div id="beer" className="h-12 max-w-[768px] m-1/2 text-white rounded-md flex flex-col justify-center text-center my-12  font-bold text-4xl md:text-5xl m-auto mt-24" style={{ fontFamily: 'Dela Gothic One' }}>
            BREWERY
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {beers.map((beer, index) =>
              <div key={index} className="w-full ">
                <div className={`aspect-square w-full relative rounded-lg overflow-hidden bg-white`} >
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75 " onClick={() => set_index(i => i !== index ? index : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90 mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base leading-6 ${_index === index ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div className="h-12"></div>
          <div id="food" className="h-12 max-w-[768px] m-1/2 text-white rounded-md flex flex-col justify-center text-center my-12  font-bold text-4xl md:text-5xl m-auto mt-24" style={{ fontFamily: 'Dela Gothic One' }}>
            FOOD
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {foods.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 ? index + beers.length - 1 : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            キッチンカー
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {kitchens.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 + foods.length ? index + beers.length - 1 + foods.length : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 + foods.length ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div id="beer" className="h-12 max-w-[768px] m-1/2 text-white rounded-md flex flex-col justify-center text-center my-12  font-bold text-5xl m-auto mt-24" style={{ fontFamily: 'Dela Gothic One' }}>
            CAMPAIGN
          </div>
          <div className=" flex flex-col justify-center text-center max-w-[768px] m-auto  pb-12">
            <div className="w-full max-w-[768px] m-auto">
              <Image src={"/img/campain.png"} width={500} height={500} className="w-full h-auto" alt="campain" />
            </div>
            <div>
              イベント当日、京都駅改札内に掲示されているポスターから二次元コードにアクセスして、イベント会場にて1会計をしていただくと、カプセルガチャを1回まわして、景品が当たります！ はずれなし！
              【景品引換場所】 京都駅構内 コトチカ広場
            </div>
          </div>
          <div className="h-12"></div>
        </div>
      </div >
      <div className="bg-cl-0 relative z-[1]" >

        <Image src={"/img/banner.png"} width={500} height={500} className={`h-auto w-11/12 max-w-[500px] m-auto sticky z-[5]`} alt="banner" style={{ top: "calc(100vh - 12rem)" }} />
        <div className="h-48"></div>

        <div className=" w-full bg-cl-2 relative z-[4] p-4" id="event">
          <div className="h-12"></div>
          <div className="w-full max-w-[768px] m-auto flex flex-col justify-center">
            <Image src={"/img/main_event.png"} width={500} height={500} className="w-full h-auto" alt="event-logo" />
          </div>
          <div className="w-full max-w-[768px] m-auto flex flex-col justify-center">
            <Image src={"/img/main_event_2.png"} width={500} height={500} className="w-full h-auto" alt="event-logo" />
          </div>
          <div className="h-12 max-w-[768px] m-1/2 text-white rounded-md flex flex-col justify-center text-center my-12  font-bold text-4xl md:text-5xl m-auto mt-24" style={{ fontFamily: 'Dela Gothic One' }}>
            BREWERY
          </div>
          <div className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            4/25 Fri, 4/26 Sat
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 + foods.length + kitchens.length ? index + beers.length - 1 + foods.length + kitchens.length : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 + foods.length + kitchens.length ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            4/27 Mon, 4/28 Tue
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_2.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 + foods.length + kitchens.length + stores.length ? index + beers.length - 1 + foods.length + kitchens.length + stores.length : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 + foods.length + kitchens.length + stores.length ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            4/29 Wed, 4/30 Thu
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_3.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length ? index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            5/1 Thu, 5/2 Fri
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_4.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length + stores_3.length ? index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length + stores_3.length : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length + stores_3.length ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>              </div>
            )}
          </div>
          <div className="h-12 max-w-[768px] m-1/2 text-white rounded-md flex flex-col justify-center text-center my-12  font-bold text-4xl md:text-5xl m-auto mt-24" style={{ fontFamily: 'Dela Gothic One' }}>
            FOOD
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_food.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  {beer.img ? <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} /> : null}
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center cursor-pointer hover:opacity-75" onClick={() => set_index(i => i !== index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length + stores_3.length + stores_4.length ? index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length + stores_3.length + stores_4.length : -1)}>{beer.name} <PlayArrowIcon className="!w-6 !h-6 rotate-90  mb-2" /></div>
                <div className=" text-white text-center opacity-75">{beer.add}</div>
                <div className={` text-white text-left px-2 my-2  overflow-hidden text-sm md:text-base ${_index === index + beers.length - 1 + foods.length + kitchens.length + stores.length + stores_2.length + stores_3.length + stores_4.length ? "h-max" : "h-0"}`} dangerouslySetInnerHTML={{ __html: beer.content }}></div>
              </div>
            )}
          </div>
          <div className="h-24"></div>

        </div >
        <div className="bg-white">
          <div className=" h-60 p-4 max-w-[768px] w-full m-auto">
            <div className="h-12"></div>
            <div className="md:flex m-auto w-full">
              <Image src={"/img/footer_01.png"} width={500} height={500} className="w-4/5 max-w-[375px] md:w-1/2 md:max-w-none !h-auto" alt="f1" />
              <Image src={"/img/footer_02.png"} width={500} height={500} className="w-3/6 max-w-[375px] md:w-1/2 md:max-w-none !h-auto" alt="f2" />
            </div>
            <div className="h-2"></div>
            <div className="flex w-full m-auto">
              <Image src={"/img/footer_03.png"} width={500} height={500} className="w-full h-auto" alt="f2" />
            </div>
          </div>
        </div>
        <div className="h-60 bg-white"></div>
      </div>
    </>
  );
}
