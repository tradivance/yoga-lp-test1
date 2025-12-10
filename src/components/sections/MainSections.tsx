"use client";

import React from 'react';
import { Search, Star, MapPin, User, CheckCircle, ChevronRight } from 'lucide-react';
import { ButtonPrimary, ButtonOutline, SectionTitle } from '@/components/ui/UiParts';

export const Hero = () => (
  <section className="relative pt-20">
    <div className="relative w-full h-[600px] md:h-[700px] bg-gray-100 overflow-hidden group">
      <img
        src="https://spark-mule-706.notion.site/image/attachment%3Ac22e76f7-2730-4e78-9aa7-91562df788bf%3AGenerated_Image_December_09_2025_-_2_52PM.jpeg?id=2c4eedb4-bf7a-80ff-9f5b-e343ef9d090c&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
        alt="Hero Background"
        className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-xl space-y-6 animate-fade-in">
            <h1 className="text-text-main font-bold leading-tight drop-shadow-sm">
              <span className="block text-primary text-xl md:text-3xl mb-4 font-english tracking-widest">
                HOT YOGA STUDIO KIKI
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-2">
                それは、<br />人生のための
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-primary">
                1時間。
              </span>
            </h1>
            <p className="text-text-main text-base md:text-xl font-medium leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm md:bg-transparent md:backdrop-blur-none md:p-0 md:border-none md:shadow-none">
              全国<span className="text-primary font-bold text-2xl mx-1">450</span>店舗以上展開。<br className="md:hidden" />
              <span className="font-bold">80%以上</span>が未経験からスタート。<br />
              今なら<span className="font-bold text-primary border-b-2 border-primary">手ぶら体験0円</span>キャンペーン実施中！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ButtonPrimary className="w-full sm:w-auto px-16 py-5 text-xl shadow-xl ring-4 ring-orange-100 animate-pulse-slow">
                0円体験を予約する
              </ButtonPrimary>
            </div>
            <p className="text-xs text-text-sub font-medium bg-white/80 inline-block px-3 py-1.5 rounded shadow-sm">
              ※キャンペーン期間: 2025年12月31日まで
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Campaign = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <h2 className="text-lg md:text-xl font-bold text-text-main">開催中のキャンペーン</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <a
            href="#campaign"
            className="block cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <img
              src="https://spark-mule-706.notion.site/image/attachment%3A2ab9ec7c-0018-4b14-bc49-529f6c1aa705%3AGenerated_Image_December_09_2025_-_12_21AM.jpeg?id=2c3eedb4-bf7a-80d2-9e5c-cd817da700e6&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
              alt="締切迫る！3ヶ月2,980円キャンペーン"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Plan = () => {
  const plans = [
    {
      title: "マンスリー4",
      price: "6,800",
      desc: "週1ペースで\n通いたい方",
      features: ["1店舗限定", "月4回まで", "まずはここから"],
      recommend: false
    },
    {
      title: "プライムフリー",
      price: "16,800",
      desc: "KIKIを最大限\n楽しみたい方へ",
      features: ["全店舗利用OK", "通い放題", "バスタオル無料"],
      recommend: true,
      tag: "オススメ！"
    },
    {
      title: "ライトプラン",
      price: "6,800",
      desc: "決まった店舗で\nいつでも通いたい方",
      features: ["2店舗利用OK", "月4回まで", "自分のペースで"],
      recommend: false
    }
  ];

  return (
    <section className="py-12 md:pt-20 md:pb-[188px] bg-white relative overflow-hidden rounded-tl-[50px] md:rounded-tl-[100px]" id="price">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://spark-mule-706.notion.site/image/attachment%3A9a8aac9e-5350-4192-b5c6-b95571da5276%3A3abaeff5-a909-41ea-a588-702ca8d01aa2.jpeg?id=2c4eedb4-bf7a-8003-9c48-f9003c61cb87&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          alt="Studio Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-[800px] md:max-w-6xl">
        <div className="text-center mb-[64px]">
          <span className="relative inline-block pl-[25px] mb-[16px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:content-[''] before:absolute before:top-[0.4em] before:left-0 before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
            PLAN
          </span>
          <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main">
            KIKIの選べる料金プラン
          </h2>
          <p className="mt-4 font-medium text-[16px] md:text-[18px] leading-[1.8]">
            ライフスタイルに合わせて選べる<br className="md:hidden" />3つのプラン！
          </p>
        </div>

        {/* プラン一覧 */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-[24px] md:gap-[28px] mb-[64px]">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`
                relative w-full md:flex-1 rounded-[20px] text-center overflow-hidden flex flex-row md:flex-col
                ${plan.recommend
                  ? 'bg-[#fee2e3] border-[4px] border-[var(--color-red)] pt-[55px] md:pt-[60px] pb-[18px] px-[10px] md:px-[13px] order-first md:order-none'
                  : 'bg-white border border-[var(--color-orange3)] px-[18px] md:px-[23px] py-[18px]'}
              `}
            >
              {/* オススメ！ラベル */}
              {plan.recommend && (
                <div className="absolute top-[10px] md:top-0 left-[10%] md:left-0 w-[80%] md:w-full bg-[var(--color-red)] text-white text-[14px] md:text-[20px] font-bold py-[3px] md:py-[7px] min-h-[30px] rounded-[20px] md:rounded-none z-10 shadow-sm leading-[1.3]">
                  オススメ！
                </div>
              )}

              {/* リード文 */}
              <div className={`
                flex items-center justify-center font-bold text-[18px] leading-[1.4] whitespace-pre-wrap w-[50%] md:w-full px-1 md:px-0 border-b-0 md:border-b
                ${plan.recommend
                  ? 'text-[var(--color-red)] border-[var(--color-red)] pb-0 md:pb-[12px] mb-0 md:mb-[12px] min-h-[auto] md:min-h-[5.5em]'
                  : 'text-[var(--color-orange3)] border-[var(--color-orange3)] pb-0 md:pb-[12px] mb-0 md:mb-[12px] min-h-[5.5em]'}
              `}>
                {plan.desc}
              </div>

              {/* ボディ (スマホレイアウト調整用: 全プラン統一) */}
              <div className="flex flex-col md:flex-col items-center md:items-stretch w-[50%] md:w-full gap-2 md:gap-0">
                {/* タイトル */}
                <h3 className={`
                  flex items-center justify-center text-[14px] md:text-[16px] font-normal whitespace-pre-wrap leading-[1.1] mb-0 w-full md:w-full border-l ${plan.recommend ? 'border-[var(--color-red)]' : 'border-[var(--color-orange3)]'} md:border-none pl-[12px] md:pl-0 ml-[12px] md:ml-0 md:h-[3em] md:mb-0
                `}>
                  {plan.title}
                </h3>

                {/* 価格エリア */}
                <div className={`
                flex flex-col items-center justify-center w-full md:w-full h-auto md:h-[6em] gap-[4px] md:gap-0
              `}>
                  <span className="block text-[12px]">月会費</span>
                  <div className="flex items-center justify-end md:justify-center text-text-main leading-[1.3] text-[26px] md:text-[24px]">
                    <span className="text-[16px]">¥</span>
                    <span className="font-english font-bold tracking-tight">{plan.price}</span>
                    <span className="text-[10px] md:text-[10px] font-normal ml-1 self-end mb-1">(税込)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ボタンエリア */}
        <div className="flex flex-col items-center justify-center mt-[48px] md:mt-[64px]">
          <div className="relative inline-block px-[20px] mb-[8px] text-[18px] font-medium text-[var(--color-orange3)] text-center leading-[140%] 
             before:content-[''] before:absolute before:bottom-[-4%] md:before:bottom-[-7%] before:left-0 before:w-[10px] before:h-[14px] before:bg-[url('/common/images/buttons-tittle-left.svg')] before:bg-cover before:translate-y-[-50%]
             after:content-[''] after:absolute after:bottom-[-4%] md:after:bottom-[-7%] after:right-0 after:w-[10px] after:h-[14px] after:bg-[url('/common/images/buttons-tittle-right.svg')] after:bg-cover after:translate-y-[-50%]">
            入会後も自由にコース変更OK
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <a
              href="#reservation"
              className="relative flex justify-center items-center w-full md:w-auto min-w-[250px] md:min-w-[250px] h-[48px] px-[25px] py-[11px] mb-[16px] text-[16px] font-bold bg-white outline outline-1 outline-[var(--color-orange3)] rounded-[50px] text-[var(--color-orange3)] cursor-pointer transition-colors duration-600 hover:bg-[#ffe0b2] group"
            >
              <span className="relative inline-block pr-[20px] before:absolute before:top-1/2 before:right-0 before:w-[10px] before:h-[10px] before:mt-[-6px] before:border-t-2 before:border-r-2 before:border-[var(--color-orange3)] before:rotate-45 before:transition-all before:duration-600 group-hover:before:right-[-5px]">
                0円体験を予約する
              </span>
            </a>
            <a href="/price" className="text-text-sub hover:text-primary text-sm font-bold border-b border-text-sub hover:border-primary transition-colors pb-0.5">
              料金プランを詳しく見る
            </a>
          </div>
        </div>
      </div >
    </section >
  );
};


export const StudioSearch = () => (
  <section className="py-12 md:pt-20 md:pb-[188px] bg-white relative">
    {/* Studio Image - Desktop Position matching reference */}
    <div className="absolute hidden md:block top-[-100px] left-[50%] w-[550px] h-[310px] z-0">
      <img
        src="https://spark-mule-706.notion.site/image/attachment%3A8ee7339a-8d10-4e72-a641-9132df306dd9%3AGenerated_Image_December_09_2025_-_1_07PM.jpeg?id=2c4eedb4-bf7a-8042-86a7-d9287ed7775b&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
        alt="Studio Atmosphere"
        className="w-full h-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
      />
    </div>
    {/* Studio Image - Mobile Position (Simplified adaptation) */}
    <div className="md:hidden relative w-full h-[200px] mb-8 overflow-hidden rounded-r-[50px] ml-[-20px] w-[90%]">
      <img
        src="https://spark-mule-706.notion.site/image/attachment%3A8ee7339a-8d10-4e72-a641-9132df306dd9%3AGenerated_Image_December_09_2025_-_1_07PM.jpeg?id=2c4eedb4-bf7a-8042-86a7-d9287ed7775b&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
        alt="Studio Atmosphere"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="w-full md:w-[55%] text-center md:text-left mb-12 md:pl-24">
        <span className="relative inline-block md:block pl-[25px] mb-[16px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:content-[''] before:absolute before:top-[0.4em] before:left-0 before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
          STUDIO
        </span>
        <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main mb-8">
          KIKIの店舗一覧
        </h2>

        <div className="text-text-main font-bold leading-relaxed mb-4">
          <p className="text-xl md:text-2xl mb-2">
            店舗数業界<span className="text-primary text-3xl md:text-4xl font-english mx-2 relative top-1 font-black">No.1</span><sup className="text-xs">※1</sup>
          </p>
          <p className="text-xl md:text-2xl">
            全国選べる<span className="text-primary text-3xl md:text-4xl font-english mx-2 relative top-1 font-black">450店舗！</span>
          </p>
        </div>

        <p className="text-[10px] text-gray-500 leading-tight md:max-w-md">
          ※1 東京商工リサーチ調べ（2025年3月）
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-3 rounded-full shadow-xl flex items-center mb-16 border border-gray-200 transition-all hover:shadow-2xl focus-within:ring-4 focus-within:ring-orange-100 focus-within:border-primary">
        <Search className="text-gray-400 ml-4 w-6 h-6" />
        <input
          type="text"
          placeholder="店舗名・駅名で探す（例：新宿、渋谷）"
          className="flex-1 px-4 py-3 outline-none text-text-main placeholder-gray-400 text-base bg-transparent"
        />
        <button className="bg-text-main hover:bg-gray-700 text-white font-bold py-3 px-10 rounded-full transition-colors shadow-md whitespace-nowrap">
          検索
        </button>
      </div>
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-bold text-text-main mb-6 pl-2 border-l-4 border-primary">エリアから探す</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {['関東', '北海道・東北', '中部', '関西', '中国・四国', '九州・沖縄'].map((area, idx) => (
            <button key={idx} className="bg-white hover:bg-orange-50 hover:border-orange-200 hover:text-primary py-4 px-4 rounded-xl shadow-sm border border-gray-200 font-bold text-text-main text-sm flex flex-col items-center justify-center gap-2 group transition-all duration-300 h-24">
              <MapPin className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors mb-1" />
              <span>{area}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Reason = () => (
  <section className="py-12 md:py-20 bg-white relative">
    {/* Reason Image - Desktop (Matching Studio Layout) */}
    <div className="absolute hidden md:block top-[-100px] left-[50%] w-[550px] h-[310px] z-0">
      <img
        src="https://spark-mule-706.notion.site/image/attachment%3A637291ab-abcf-40c4-8b31-8e2e76eb6ce8%3AGenerated_Image_December_09_2025_-_1_28PM.jpeg?id=2c4eedb4-bf7a-8095-a27c-e18ee2461772&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
        alt="Reason Atmosphere"
        className="w-full h-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
      />
    </div>
    {/* Reason Image - Mobile */}
    <div className="md:hidden relative w-full h-[200px] mb-8 overflow-hidden rounded-r-[50px] ml-[-20px] w-[90%]">
      <img
        src="https://spark-mule-706.notion.site/image/attachment%3A637291ab-abcf-40c4-8b31-8e2e76eb6ce8%3AGenerated_Image_December_09_2025_-_1_28PM.jpeg?id=2c4eedb4-bf7a-8095-a27c-e18ee2461772&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
        alt="Reason Atmosphere"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="container mx-auto px-4 relative z-10 w-full max-w-[800px] md:max-w-6xl">
      <div className="w-full md:w-[55%] text-center md:text-left mb-16 md:pl-24">
        <span className="relative inline-block md:block pl-[25px] mb-[16px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:content-[''] before:absolute before:top-[0.4em] before:left-0 before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
          THE REASON WHY
        </span>
        <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main mt-2 mb-4">
          KIKIが<span className="text-primary">選ばれる理由</span>
        </h2>
        <p className="text-text-sub text-[16px] md:text-[18px] font-medium leading-relaxed">
          初心者でも安心。無理なく続けられる環境があります。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            no: "01",
            title: "駅徒歩3分以内で\nアクセス抜群！",
            desc: "ほとんどの店舗が駅近だから、仕事帰りや買い物のついでに気軽に通えます。",
            img: "https://spark-mule-706.notion.site/image/attachment%3A063c8fea-b60b-4989-a411-63ea0c9e5caf%3Akiki_yoga_studio.png?id=2c5eedb4-bf7a-80a7-bb7a-d612f4f27d32&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          },
          {
            no: "02",
            title: "80%以上が\n未経験スタート",
            desc: "インストラクターが丁寧にサポート。体が硬くても、運動が苦手でも大丈夫。",
            img: "https://spark-mule-706.notion.site/image/attachment%3Aa2e83983-2fe4-4d2b-a258-7823a6e69767%3AGenerated_Image_December_10_2025_-_1_09PM.jpeg?id=2c5eedb4-bf7a-80ca-9ee4-f1daf4535657&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          },
          {
            no: "03",
            title: "30種類以上の\n多彩なプログラム",
            desc: "リラックス系からパワー系まで。その日の気分や目的に合わせて選べます。",
            img: "https://spark-mule-706.notion.site/image/attachment%3Aeffeb0eb-3342-4c60-a7fe-a3ea45096dc8%3AGenerated_Image_December_10_2025_-_1_15PM.jpeg?id=2c4eedb4-bf7a-80ea-964b-fb34b290fd12&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          }
        ].map((item, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
              <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${idx < 2 ? 'opacity-80' : ''}`} />
              <div className="absolute top-0 left-0 bg-primary text-white font-english font-bold text-xl px-4 py-3 rounded-br-2xl shadow-md">
                POINT {item.no}
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-main mb-3 whitespace-pre-line leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-text-sub text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Voice = () => {
  const allVoices = [
    { age: "20代 女性", title: "友達から「痩せた？」と\n言われることが増えた", text: "腰回りがくびれて背肉が取れ、顔周りもスッキリしました！一年継続したことで、会う友達から『痩せた？』とよく聞かれています。", tags: ["#ダイエット", "#くびれ"] },
    { age: "30代 女性", title: "肩こり・頭痛が改善し\n身体スッキリ", text: "明らかに始めたてよりも身体が柔らかく、すっきりとしました！前は肩こりから頭痛があったのですが、今は頭痛がほとんどありません！！", tags: ["#肩こり解消", "#リフレッシュ"] },
    { age: "40代 女性", title: "肌の保水力がアップし、\n乾燥しにくくなりました", text: "冬はいつも乾燥で肌がカサカサしてしまうのですが、保水力が増した気がします。それと、レッスンを受けた日はぐっすり深い睡眠がとれます。", tags: ["#美肌", "#睡眠改善"] },
    { age: "30代 女性", title: "体重が5kg減って\n体が軽くなった", text: "週3回通い始めて3ヶ月で5kg減量に成功！代謝が上がったのか、食事制限なしでこの結果に驚いています。", tags: ["#ダイエット", "#代謝UP"] },
    { age: "20代 女性", title: "姿勢が良くなり\n自信が持てるように", text: "デスクワークで猫背気味でしたが、ヨガを始めてから背筋がピンと伸びるようになりました。周りからも姿勢を褒められます。", tags: ["#姿勢改善", "#自信"] },
    { age: "40代 女性", title: "更年期の不調が\n和らぎました", text: "ホットフラッシュや不眠に悩んでいましたが、ヨガを続けることで症状が軽減。心身ともに安定してきました。", tags: ["#更年期", "#リラックス"] },
    { age: "50代 女性", title: "膝の痛みが軽減し\n動きやすくなった", text: "膝の痛みで階段の上り下りが辛かったのですが、筋力がついて痛みが減りました。日常生活が楽になりました。", tags: ["#膝痛改善", "#筋力UP"] },
    { age: "30代 女性", title: "ストレス解消になり\n毎日が楽しい", text: "仕事のストレスで悩んでいましたが、ヨガの時間が心のリセットに。レッスン後は気分がスッキリして前向きになれます。", tags: ["#ストレス解消", "#メンタルケア"] },
  ];

  // スマホ用: 最初は先頭3つ、クライアント側でランダム化
  const [mobileVoices, setMobileVoices] = React.useState(allVoices.slice(0, 3));

  React.useEffect(() => {
    // クライアント側でのみランダムに3つ選択
    const shuffled = [...allVoices].sort(() => 0.5 - Math.random());
    setMobileVoices(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="py-12 md:py-20 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle en="Voice" ja="会員様の声" />

        {/* PC: 自動横スクロール */}
        <div className="hidden md:block relative">
          <div className="flex gap-6 animate-scroll">
            {[...allVoices, ...allVoices].map((voice, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col min-w-[350px] hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <User className="text-gray-400 w-8 h-8" />
                  </div>
                  <span className="font-bold text-text-main text-sm">{voice.age}</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-text-main whitespace-pre-line min-h-[3.5rem]">{voice.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed mb-6 flex-grow">{voice.text}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {voice.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* スマホ: ランダム3つ固定表示 */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {mobileVoices.map((voice, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <User className="text-gray-400 w-8 h-8" />
                </div>
                <span className="font-bold text-text-main text-sm">{voice.age}</span>
              </div>
              <h3 className="font-bold text-lg mb-3 text-text-main whitespace-pre-line min-h-[3.5rem]">{voice.title}</h3>
              <p className="text-sm text-text-sub leading-relaxed mb-6 flex-grow">{voice.text}</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {voice.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonOutline>他の会員様の声を見る</ButtonOutline>
        </div>
      </div>
    </section>
  );
};

export const TrialFlow = () => (
  <section className="relative pt-[120px] pb-[70px] md:pb-[100px] mb-[40px] md:mb-[0] bg-gradient-to-br from-[#fff7e6] to-[#fff] rounded-tl-[100px] mt-[120px]">
    {/* 装飾フィギュア (参考CSSにあるが画像がないため、配置だけ再現して非表示状態にするか、placeholder) */}
    {/* 
    <div className="absolute top-[-100px] left-[50%] w-[650px] height-[370px] bg-[url(/images/figure-trial.webp)] bg-cover rounded-tl-[50px] rounded-bl-[50px] z-10 md:block hidden"></div>
     */}

    <div className="container mx-auto px-4 relative z-10 w-full max-w-[800px] md:max-w-6xl">
      <div className="text-center mb-[64px]">
        <span className="relative block mb-4 pl-[25px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:absolute before:top-[0.4em] before:left-0 before:block before:content-[''] before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
          Trial Flow
        </span>
        <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main">
          体験レッスンの流れ
        </h2>
        <p className="mt-4 font-medium text-[16px] md:text-[18px] leading-[1.8]">
          初めてでも安心！<br className="md:hidden" />60分でホットヨガの魅力を体験できます
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[12px] mb-[64px]">
        {[
          {
            step: "01",
            title: "WEBで予約",
            text: (
              <>
                PC・スマートフォンから<span className="text-[var(--color-orange3)] font-bold">24時間いつでも予約可能</span>です。
              </>
            ),
            img: "https://spark-mule-706.notion.site/image/attachment%3A15f3d657-13e9-46b9-91dc-2dce2eda2b13%3AGenerated_Image_December_10_2025_-_2_23PM.jpeg?id=2c5eedb4-bf7a-8063-8db7-f1465d0c5d9c&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          },
          {
            step: "02",
            title: "来店・受付",
            text: (
              <>
                <span className="text-[var(--color-orange3)] font-bold">レッスン30分前</span>のご来店をお願いいたします。レッスンの説明と簡単なカウンセリングをさせていただきます。
              </>
            ),
            img: "https://spark-mule-706.notion.site/image/attachment%3A1c1b29f1-831b-4116-b7b9-5017ee57578e%3AGenerated_Image_December_10_2025_-_2_04PM.jpeg?id=2c5eedb4-bf7a-80c2-95b1-ece6caf90e53&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          },
          {
            step: "03",
            title: "レッスン参加",
            text: (
              <>
                <span className="text-[var(--color-orange3)] font-bold">ヨガ初心者の方がほとんど</span>。体が硬い方、体力に自信がない方でも無理のない内容のため安心です。
              </>
            ),
            img: "https://spark-mule-706.notion.site/image/attachment%3A703a7ef0-8e6a-4982-b9b0-14ee0939b78d%3AGenerated_Image_December_10_2025_-_2_01PM.jpeg?id=2c5eedb4-bf7a-80bb-8cd5-f942fada18ad&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          },
          {
            step: "04",
            title: "レッスン終了後",
            text: (
              <>
                汗をかいて<span className="text-[var(--color-orange3)] font-bold">心も体もスッキリ</span>。パウダールーム・ロッカールームとシャワーをご利用いただけます。
              </>
            ),
            img: "https://spark-mule-706.notion.site/image/attachment%3A682620cf-1137-470d-a61f-d59bff8c0109%3AGenerated_Image_December_10_2025_-_2_16PM.jpeg?id=2c5eedb4-bf7a-8071-a7d8-e9a1db6cb5a3&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
          }
        ].map((item, idx) => (
          <div key={idx} className={`flex md:block md:flex-1 gap-[32px] md:gap-0 group md:hover:-translate-y-2 transition-transform duration-700`}>
            {/* Step Number */}
            <div className={`
              relative text-[var(--color-orange3)] mb-[15px]
              before:content-[''] before:absolute before:bg-[var(--color-orange3)]
              md:before:right-0 md:before:bottom-[10px] md:before:w-[82%] md:before:h-[1px]
              max-md:before:left-[13px] max-md:before:bottom-[0] max-md:before:w-[1px] max-md:before:h-[88%]
              ${idx === 3 ? 'md:before:hidden max-md:before:hidden' : ''}
            `}>
              <span className="flex flex-col items-start font-english text-[24px] font-semibold leading-[1] w-[35px] md:w-[35px]">
                <small className="block mb-[3px] text-[10px]">STEP</small>
                {item.step}
              </span>
            </div>

            <div className="flex-1 md:pr-[7px]">
              <div className="bg-white rounded-[20px] overflow-hidden flex md:block">
                <div className="w-[100px] md:w-full h-[100px] md:h-auto md:aspect-[432/280] leading-[0]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-[16px] md:p-[20px] md:min-h-[170px]">
                  <h3 className="text-[16px] md:text-[18px] font-bold text-[var(--color-orange3)] mb-[8px] md:mb-[15px] md:text-center leading-[1.35]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-[48px] md:mt-[64px]">
        <div className="flex flex-col items-center justify-center w-full">
          <a
            href="#reservation"
            className="relative flex justify-center items-center w-full md:w-auto min-w-[250px] md:min-w-[250px] h-[48px] px-[25px] py-[11px] mb-[16px] text-[16px] font-bold bg-white outline outline-1 outline-[var(--color-orange3)] rounded-[50px] text-[var(--color-orange3)] cursor-pointer transition-colors duration-600 hover:bg-[#ffe0b2] group"
          >
            <span className="relative inline-block pr-[20px] before:absolute before:top-1/2 before:right-0 before:w-[10px] before:h-[10px] before:mt-[-6px] before:border-t-2 before:border-r-2 before:border-[var(--color-orange3)] before:rotate-45 before:transition-all before:duration-600 group-hover:before:right-[-5px]">
              今すぐ体験予約する
            </span>
          </a>
          <p className="mt-4 text-xs text-text-sub">※体験レッスンはお一人様1回限り</p>
        </div>
      </div>
    </div>
  </section>
);