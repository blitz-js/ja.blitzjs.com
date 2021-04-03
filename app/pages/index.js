import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
            <div className="z-30 text-white col-span-full">
              <Header
                className="px-6 mx-auto max-w-7xl"
                onNavToggle={(isOpen) => {
                  setNavIsOpen(isOpen)
                }}
              />
            </div>
            <div
              className={
                "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
                (navIsOpen ? "z-20 fixed" : "-z-10")
              }
            ></div>
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    The Fullstack React Framework
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
                    Blitz は Ruby on Rails にインスパイアされた、 Next.js上に構築されている、
                    REST/GraphQL を必要としない “Zero-API” Dataレイヤーを特徴とした
                    パワフルなフレームワークです。
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      5分でBlitzを始める
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                “Zero-API” Dataレイヤーは、API
                エンドポイントの追加やクライアントでのFetch・キャッシュの代わりとして、
                <string className="font-bold">
                  サーバーコードを直接コンポーネントにインポート可能
                </string>
                です。
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                Blitzアプリは、
                <string className="font-bold">すべてセットアップ済みのアプリを提供します！</string>
                例えば、ESLint、Prettier、Jestや、ユーザーの会員登録、ログイン、パスワードリセットなど。
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                非常に柔軟でありながら、デフォルトの設定や規約を提供します。（ルーティング、ファイル構造、認証など）
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Top Videos</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=UHyx8MtCVVk" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Productionアプリに必要なすべてを
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="フルスタック & モノリシック">
                      <p>
                        1つのアプリで、データベースからフロントエンドまですべてを実現します。
                        あなたが開発するのはたった1つだけ。Deployするのも1つだけです。
                      </p>
                      <p>また、サーバー / サーバーレスへのDeployが可能です。</p>
                    </Feature>
                    <Feature title="API不要">
                      <p>
                        バックエンドからデータをFetchする必要はなく、サーバーコードをコンポーネントに直接インポートします。
                        ビルド時に、関数のインポートは自動生成のHTTP APIに置き換えられます。
                      </p>
                      <p>生成されたAPIは、アプリ・サードパーティからも利用可能です。</p>
                    </Feature>
                    <Feature title="Loose Opinions - ゆるい意見">
                      <p>
                        すぐに使えるエクスペリエンスが、ほぼすべてのアプリケーションに最適な方法を案内します。
                        しかし、道を逸れたいときには100%自由に行動できます。
                      </p>
                      <p>
                        ほぼすべてがプラグイン可能です。
                        例えば、スタイリングやフォームライブラリはどれを使うか強制するものはありません。
                      </p>
                    </Feature>
                    <Feature title="設定より規約">
                      <p>
                        つまらないセットアップ、設定はすべてBlitzが行います。
                        共通のプロジェクト構造とアーキテクチャパターンにより、
                        Blitzのアプリから別のアプリへの移行は簡単で、一息で終わらせることができます。
                      </p>
                    </Feature>
                    <Feature title="始めるのは簡単で、拡張も簡単">
                      <p>
                        既存のNext.jsアプリからBlitzへの移行は、初心者でもできるくらい簡単です。
                      </p>
                      <p>
                        それはコードの行数、コードベースで作業する人数、コードの実行数に関わらず、
                        あらゆる形態でのスケールアップが可能です。
                      </p>
                    </Feature>
                    <Feature title="安定性">
                      <p>
                        バージョン1.0に到達したら、リリースサイクルを安定した予測可能なものに切り替え、
                        安定版 / LTS / ベータ版などの複数チャンネルを用意します。
                      </p>
                      <p>この点については、Emberから多くのインスピレーションを得ています。</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Blitz CodeSandbox Example
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image src="/img/sandbox-pic.png" layout="fill" className="object-cover" />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Click to Open in New Tab
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  Blitzコミュニティ - 私たちが最も大切にしていること
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      私たちのコミュニティは、暖かく、安全で、多様で、包括的で、楽しいものです。
                      LGBTQ+、女性、マイノリティの方は特に歓迎します。
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      ぜひ{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          行動規範
                        </StyledLink>
                      </Link>{" "}
                      を読んでください。
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Discord コミュニティに参加する
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      私たちは、若い人から年配の人まで、みんな一緒です。
                      <br className="hidden lg:inline" />
                      私たちは皆、違うというよりもただ似ています。
                      <br className="hidden lg:inline" />
                      私たちは一緒に働くことが大好きです。
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Blitzを最高のフレームワークにするため、ぜひあなたの力を貸してください！
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      コントリビュートのやり方を学ぶ
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                アーキテクチャ図
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    <img src="img/architecture.svg" alt="Architecture diagram" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                データベースからフロントエンドまで <br className="hidden xl:block" />
                すべてが End to End
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="認証認可">
                  内蔵された認証機能は非常に簡単で、非常に安全です。
                  自分でホストするユーザー名とパスワード、Auth0のようなサードパーティを含む、あらゆるIDプロバイダーで動作します。
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="特定のデータベースに依存しない">
                  あなたは好きなデータベースを使えます。 Prisma 2
                  はデフォルトのデータベースクライアントですが、これを外して Fauna や DynamoDB
                  など他のものを使うこともできます。
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="レシピ">
                  コードやパッケージをBlitzアプリにインストールするためのコマンドです。 （ex: `blitz
                  install tailwind` や `blitz install chakra-ui`）
                  レシピは誰でも作成することができます。
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="バックエンドアーキテクチャ">
                  Blitz
                  は、サーバー処理に特化した機能を持っています。（電子メールの送信、cronジョブ、バックグラウンド処理、PDFの生成など）
                  現在、バックエンドについては最小限のガイドしかありませんが、今後は幅広いパターンの対応とドキュメントの追加に取り組んでいきます。
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="Typescriptのファーストクラスサポート">
                  Blitz は Typescript で構築されており、Blitz
                  のデータレイヤーは端から端まで完全にタイプセーフです。
                  すべての型は完全に静的で、別の型生成プロセスを必要としません！
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Code Scaffolding">
                  まだ始まったばかりですが、Blitzの Code Scaffolding
                  は非常に強力なものになるでしょう。
                  プロトタイピングにも、実際のアプリケーションの構築にも最適です。
                  テンプレートを上書きして、自分のプロジェクトに合わせてカスタマイズできるようになります。
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  スポンサーの皆様
                </h2>
                <p className="text-lg xl:text-xl">
                  皆様からのご寄付は、Blitz の継続的な開発・維持に貢献しています。
                  <br className="hidden lg:block" />
                  毎月のスポンサーシップでは、月額 5ドル から寄付が可能です。
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blitz を支援する
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                さぁ、次はどうすればいいでしょう？
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  5分でBlitzを始める
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Discord に参加する
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}


Home.meta = {
  meta: {
    title: "Blitz.js - The Fullstack React Framework",
    description: `Blitz は Next.js上に構築されている “Zero-API” Dataレイヤーが特徴的なパワフルなフレームワークです。`,
  },
}

export default Home
export {getStaticProps}
