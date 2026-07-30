// ============================================================
// 「思い」ページ（/philosophy）
// 生成AI時代における「人間が描くこと」への宣言文。
// LP と同じ黒 × 明朝の世界観で、文章そのものを主役にする。
// ============================================================
import useReveal from '../useReveal.js'

export default function PhilosophyPage() {
  // スクロールに合わせて一文ずつ浮かび上がらせる。
  useReveal()

  return (
    <main className="phil">
      <div className="wrap phil__inner">
        <header className="phil__head">
          <p className="lp-kicker" data-reveal="up">OUR PHILOSOPHY</p>
          <h1 className="phil__title" data-reveal="wipe" data-reveal-delay="1">
            思い
          </h1>
        </header>

        <div className="phil__body">
          <p data-reveal="up">
            生成AIによって、誰もが一瞬でイラストを生み出せる時代になりました。
            <br />
            便利で、速くて、無限に作れる。
          </p>
          <p data-reveal="up">
            その一方で、どこか似たような絵が増え、描き手の息づかいや、迷い、こだわり、
            <br />
            感情が見えにくくなっているようにも感じます。
          </p>

          <p className="phil__quest" data-reveal="wipe">
            個性とは何か。
            <br />
            人間が描く意味とは何か。
            <br />
            これからの時代に、イラストレーターの価値は
            <br />
            本当に失われていくのか。
          </p>

          <p className="phil__strong" data-reveal="pop">
            私たちは、そうは思いません。
          </p>

          <p data-reveal="up">
            人が描く線には、その人だけの時間があります。
            <br />
            構図を考え、何度も描き直し、色を選び、感情を込め、
            <br />
            完成まで向き合った過程があります。
          </p>
          <p data-reveal="up">
            それは、単なる画像ではありません。
            <br />
            その人の感性、人生、技術、想いが宿った「作品」です。
          </p>

          <p data-reveal="up">
            白と黒には、そんな本物のイラストがあります。
          </p>
          <p className="phil__list" data-reveal="up">
            人間が描いた作品。
            <br />
            人間の個性が宿った作品。
            <br />
            人間であることの証が刻まれた作品。
          </p>

          <p className="phil__strong" data-reveal="pop">
            私たちは、それを「本物」と呼びたい。
          </p>

          <p data-reveal="up">
            生成AIが広がれば広がるほど、
            <br />
            人間が描いた一枚の価値は、より鮮明になっていく。
          </p>

          <p data-reveal="up">
            白と黒は、イラストレーターの個性を守り、届け、輝かせる場所です。
          </p>
          <p data-reveal="up">
            ここには、量産された絵ではなく、誰かが本気で描いた一枚があります。
            <br />
            ここには、代替できない個性があります。
          </p>

          <p className="phil__creed" data-reveal="wipe">
            白と黒は、
            <br />
            人間の称号。
            <br />
            人間の作品。
            <br />
            人間の証。
          </p>

          <p className="phil__close" data-reveal="pop">
            本物の個性が、ここにある。
          </p>

          <p className="phil__sign" data-reveal="up" data-reveal-delay="2">
            広川 準
          </p>
        </div>
      </div>
    </main>
  )
}
