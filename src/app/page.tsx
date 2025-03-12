'use client'
import Loading from "@/components/loading";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const toPage = useRouter()


  const [_hidden, set_hidden] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      set_hidden(true)
    }, 3000);
  }, [])

  const beers = [
    {
      img: "/logo/beer_01.png",
      name: "HOPDOG BREWING"
    },
    {
      img: "/logo/beer_02.png",
      name: "TEGAMISHA BREWERY"
    },
    {
      img: "/logo/beer_03.jpg",
      name: "Nobara Homestead Brewery"
    },
    {
      img: "/logo/beer_04.png",
      name: "West Coast Brewing"
    },
    {
      img: "/logo/beer_05.png",
      name: "Repubrew"
    },
    {
      img: "/logo/beer_06.jpg",
      name: "ワイマーケット・ブルーイング"
    },
    {
      img: "/logo/beer_07.jpg",
      name: "アルデアやましろビールズ"
    },
    {
      img: "/logo/beer_08.png",
      name: "ウッドミルブルワリー・京都"
    },
    {
      img: "/logo/beer_09.png",
      name: "Kyoto Brewing"
    },
    {
      img: "/logo/beer_10.jpg",
      name: "KYOTO NUDE BREWERY"
    },
    {
      img: "/logo/beer_11.jpg",
      name: "家守堂"
    },
    {
      img: "/logo/beer_12.png",
      name: "銭湯醸造 上方ビール"
    },
    {
      img: "/logo/beer_13.png",
      name: "Derailleur Brew Works"
    },
    {
      img: "/logo/beer_14.jpg",
      name: "箕面ビール"
    },
    {
      img: "/logo/beer_15.png",
      name: "イーグレブルワリー"
    },
    {
      img: "/logo/beer_16.png",
      name: "NOMCRAFT BREWING"
    },
    {
      img: "/logo/beer_17.png",
      name: "CHORYO Craft Beer"
    },
    {
      img: "/logo/beer_18.png",
      name: "奈良醸造",
    },
    {
      img: "/logo/beer_19.png",
      name: "RISE＆WIN Brewing Co./KAMIKATZ BEER",
    },
    {
      img: "/logo/beer_20.webp",
      name: "DD4D BREWING"
    },
    {
      img: "/logo/beer_21.png",
      name: "しまなみブルワリー"
    },
    {
      img: "/logo/beer_22.jpg",
      name: "別府ブルワリー"
    },
  ]
  const foods = [
    {
      img: "/logo/food_01.jpg",
      name: "はるまき家"
    },
    {
      img: "/logo/food_02.png",
      name: "INDIA GATE"
    },
    {
      img: "/logo/food_03.jpg",
      name: "火曜腸詰倶楽部"
    },
    {
      img: "/logo/food_04.png",
      name: "スタンドうみねこコト"
    },
    {
      img: "/logo/food_05.png",
      name: "DE FRITES STAAN"
    },
    {
      img: "/logo/food_06.jpg",
      name: "ボクとおじいちゃん"
    },
    {
      img: "/logo/food_07.jpg",
      name: "麺処 虵の目屋"
    },
    {
      img: "/logo/food_08.jpg",
      name: "モグラと夕陽"
    },
    {
      img: "/logo/food_09.png",
      name: "NITO Coffee&Craft Beer"
    },
    {
      img: "/logo/food_10.jpg",
      name: "旬菜中華バル ミツカン"
    },
  ]
  const kitchens = [
    {
      img: "/logo/ga_01.png",
      name: "Gori’s Kitchen"
    },
    {
      img: "/logo/ga_02.png",
      name: "RUDE BURGER CLUB"
    },
    {
      img: "/logo/ga_03.jpg",
      name: "森のひとやすみ"
    },
  ]
  const stores = [
    {
      img: "/logo/beer_12.png",
      name: "銭湯醸造 上方ビール"
    },
    {
      img: "/logo/store_02.jpg",
      name: "Free Spirits Brewing"
    },
    {
      img: "/logo/beer_11.jpg",
      name: "家守堂"
    },
    {
      img: "/logo/beer_14.jpg",
      name: "箕面ビール"
    },
  ]
  const stores_2 = [
    {
      img: "/logo/store_2_01.jpg",
      name: "一乗寺ブリュワリー"
    },
    {
      img: "/logo/store_2_02.png",
      name: "Bighand Bros. Beer"
    },
    {
      img: "/logo/store_2_03.png",
      name: "AQベボリューション"
    },
    {
      img: "/logo/store_2_04.png",
      name: "OUR BREWING"
    },
  ]
  const stores_3 = [
    {
      img: "/logo/store_3_01.jpg",
      name: "長濱浪漫ビールHOP三条木屋町"
    },
    {
      img: "/logo/store_3_02.jpg",
      name: "日々一泡ブルワリー"
    },
    {
      img: "/logo/beer_17.png",
      name: "CHORYO Craft Beer"
    },
    {
      img: "/logo/store_3_04.jpg",
      name: "大和醸造"
    },
  ]
  const stores_4 = [
    {
      img: "/logo/beer_01.png",
      name: "HOPDOG BREWING"
    },
    {
      img: "/logo/beer_05.png",
      name: "Repubrew"
    },
    {
      img: "/logo/beer_21.png",

      name: "しまなみブルワリー"
    },
    {
      img: "/logo/beer_02.png",
      name: "TEGAMISHA BREWERY"
    },
  ]
  const stores_food = [
    {
      name: "hinami（ホットドッグ）"
    },
    {
      img: "/logo/store_4_02.png",
      name: "OKAWARI POPCORN"
    },
    {
      img: "/logo/store_4_03.png",
      name: "こぐま商店（おかき）"
    },
  ]
  const menus = [
    {
      name: "TOP",
      link: "/"

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
      <div className="relative bg-cl-1 z-0">
        <Loading hidden={_hidden} />

        <div className="sticky -top-[700px] lg:-top-[500px] w-full h-max md:flex z-0">
          <div className="hidden lg:block p-4 lg:w-1/6">
            <Image src={"/img/menu_logo.png"} width={500} height={500} className="h-auto w-full  max-w-[250px] m-auto" alt="foam" />
            {menus.map((beer, index) =>
              <div className="text-white text-2xl pl-8 mt-3 cursor-pointer " style={{ fontFamily: 'Dela Gothic One' }} onClick={() => toPage.push("/" + beer.link)} key={index}>{beer.name}</div>
            )}
          </div>
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
          <div className="flex flex-col justify-center h-96 w-full max-w-[768px] m-auto">

            <div className="text-center text-2xl font-bold m-4 text-white">京都湯上がりクラフトビール祭 2025 開催決定！</div>
            <p className=" text-white">
              【クラフトビール×銭湯×紙芝居？！】第3回 「京都湯上がりクラフトビール祭 2025」開催決定！<br></br>
              2025年5月3日（土・祝）、4日（日・祝）に京都市・伏見の力の湯に隣接する「フットサルコート内」で行います。
            </p>
          </div>
          <div id="beer" className="h-12 max-w-[768px] m-1/2 bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0 m-auto">
            ブルワリー
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {beers.map((beer, index) =>
              <div key={index} className="w-full ">
                <div className={`aspect-square w-full relative rounded-lg overflow-hidden bg-white`} >
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div className="h-12"></div>
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            フード
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {foods.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            キッチンカー
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {kitchens.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div className=" flex flex-col justify-center text-center max-w-[768px] m-auto pt-32 pb-12">
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
      <div className="bg-cl-0 relative z-[1]">

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
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            4/25 Fri, 4/26 Sat
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            4/27 Mon, 4/28 Tue
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_2.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            4/29 Wed, 4/30 Thu
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_3.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            5/1 Thu, 5/2 Fri
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_4.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} />
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
              </div>
            )}
          </div>
          <div id="food" className="h-12 max-w-[768px] m-auto bg-amber-50 rounded-md flex flex-col justify-center text-center my-12 shadow font-bold text-2xl text-cl-0">
            フード
          </div>
          <div className="grid grid-cols-2 max-w-[768px] m-auto gap-8">
            {stores_food.map((beer, index) =>
              <div key={index} className="w-full">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-white">
                  {beer.img ? <Image src={beer.img} fill className="object-contain p-4" alt={beer.name} /> : null}
                </div>
                <div className="h-6"></div>
                <div className="font-bold text-lg text-white text-center">{beer.name}</div>
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
