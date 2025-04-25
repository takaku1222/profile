import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-2xl font-bold">tomoyukitakaku.com</h1>
        <section>
          <h2 className="text-2xl font-bold mt-8">自己紹介</h2>
          <div className="flex flex-col sm:flex-row mt-4">
            <img
              className="w-[180] h-[180] object-contain rounded-xl"
              src="img/takaku.jpg"
              alt="プロフィール写真"
            />
            <ul className="sm:ml-6">
              <li className="mt-4 sm:mt-0">名前：高久朋之</li>
              <li className="mt-4">生年月日 : 2002年12月22日(22歳)</li>
              <li className="mt-4">職業 : Web Developer</li>
              <li className="mt-4">
                好きな技術 : TypeScript/React/React Native/Next.js
              </li>
              <li className="mt-4">
                趣味 : 映画鑑賞(特にレイトショー)、ゲーム
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-16">経歴</h2>
          <p className="mt-4">
            IT系の専門学校を卒業後、株式会社メディロムに入社(2023年)し、約2年間在籍。業務では主に「集客サイト」や「採用サイト」の保守・運用を担当していました。
            また、学生向けのITインターンを開催し、プロジェクトリーダーを務めた経験があります。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-16">開発経験のある技術</h2>
          <div>
            <h3 className="text-xl font-bold mt-4">言語</h3>
            <ul className="list-disc mt-2 ml-8">
              <li>HTML : 2年</li>
              <li>CSS : 2年</li>
              <li>TypeScript : 1年</li>
              <li>Ruby : 2年</li>
              <li>SQL : 1年</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold  mt-4">
              フロントエンドフレームワーク
            </h3>
            <ul className="list-disc mt-2 ml-8">
              <li>React : 1年</li>
              <li>Next.js : 1年</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-4">
              バックエンドフレームワーク
            </h3>
            <ul className="list-disc mt-2 ml-8">
              <li>Ruby on Rails : 2年</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-16">注力している技術</h2>
          <ul className="list-disc mt-2 ml-8">
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-16">お仕事について</h2>
          <div>
            <h3 className="text-xl font-bold mt-4">稼働時間</h3>
            <p className="mt-2">
              平日・休日を問わず、週5日、最大週40時間程度の稼働が可能です。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-4">できること</h3>
            <ul className="list-disc mt-2 ml-8">
              <li>HTML、CSS、Reactを使用した、LPなどのコーディング</li>
              <li>
                TypeScript、React、Next.jsを使用した、Webアプリケーションのフロントエンド開発
              </li>
              <li>
                Ruby on Railsを使用した、Webアプリケーションのバックエンド開発
              </li>
              <li>SQLでのデータ抽出</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-4">条件等</h3>
            <ul className="list-disc mt-2 ml-8">
              <li>原則、準委任契約で契約を締結させていただきます</li>
              <li>
                基本的にリモートでの業務を希望いたします。必要に応じて対面での打ち合わせも可能です
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-16">SNS</h2>
          <div className="flex mt-4 gap-4">
            <Link href={"https://github.com/takaku1222"} target="_blank">
              <img
                className="w-[50] h-[50] object-contain"
                src="img/github-logo.svg"
                alt="GitHub Account"
              />
            </Link>
            <Link href={"https://zenn.dev/takaku"} target="_blank">
              <img
                className="w-[50] h-[50] object-contain"
                src="img/zenn-logo.svg"
                alt="Zenn Account"
              />
            </Link>
            <Link href={"https://x.com/takaku_22"} target="_blank">
              <img
                className="w-[50] h-[50] object-contain"
                src="img/x-logo.png"
                alt="X Account"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
