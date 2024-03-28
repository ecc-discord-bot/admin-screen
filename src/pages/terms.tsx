import { useNavigate } from "react-router-dom";

export const Terms = () => {
  const navigate = useNavigate();
  const next = () => {
    console.log("同意しました");
  };

  return (
    <section className="font-meiryo flex justify-center">
      <div className="text-custom-black mx-[10%] my-[5%] w-10/12 bg-white p-[5%] shadow-md shadow-slate-200">
        <h1 className="mb-16 text-center text-4xl font-bold">利用規約</h1>
        <p>
          この規約はお客様が、神楽（以下「神楽」）が提供する「国会劇場」サービス（以下「本サービス」）
          をご利用頂く際の取扱いにつき定めるものです。本規約に同意した上で本サービスをご利用ください。
        </p>
        {/* 第1条 */}
        <section>
          <h2 className="mb-4 mt-16 font-bold">第一条（適用）</h2>
          <p>本規約上で使用する用語の定義は、次に掲げるとおりとします。</p>
          <ol className="m-6 list-outside list-decimal">
            <li className="py-1">
              <div className="flex items-start">
                <p className="min-w-[7em]">本サービス</p>
                <span className="whitespace-pre-line">
                  神楽が運営するサービス及びサービス
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <div className="min-w-[7em]">本サイト</div>
                <span className="whitespace-pre-line">
                  本サービスのコンテンツが掲載されたウェブサイト
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="min-w-[7em]">本コンテンツ</span>
                <span className="whitespace-pre-line">
                  本サービス上で提供される文字、音、静止画、動画、ソフトウェアプログラム、コード等の総称
                  (投稿情報を含む)
                </span>
              </div>
            </li>
          </ol>
        </section>
        {/* 第2条 */}
        <section>
          <h2 className="mb-4 mt-16 font-bold">第二条（本規約への同意）</h2>
          <ol className="m-6 list-outside list-decimal">
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  利用者は、本利用規約に同意頂いた上で、本サービスを利用できるものとします。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  利用者が未成年者である場合には、親権者その他の法定代理人の同意を得たうえで、本サービスをご利用ください。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  未成年者の利用者が、法定代理人の同意がないにもかかわらず同意があると偽りまたは年齢について成年と偽って本サービスを利用した場合、
                  その他行為能力者であることを信じさせるために詐術を用いた場合、本サービスに関する一切の法律行為を取り消すことは出来ません。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  本規約の同意時に未成年であった利用者が成年に達した後に本サービスを利用した場合、
                  当該利用者は本サービスに関する一切の法律行為を追認したものとみなされます。
                </span>
              </div>
            </li>
          </ol>
        </section>
        {/* 第3条 */}
        <section>
          <h2 className="mb-4 mt-16 font-bold">第三条（規約の変更）</h2>
          <ol className="m-6 list-outside list-decimal">
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  神楽は、利用者の承諾を得ることなく、いつでも、本規約の内容を改定することができるものとし、利用者はこれを異議なく承諾するものとします。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  神楽は、本規約を改定するときは、その内容について神楽所定の方法により利用者に通知します。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  前本規約の改定の効力は、神楽が前項により通知を行った時点から生じるものとします。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  利用者は、本規約変更後、本サービスを利用した時点で、変更後の本利用規約に異議なく同意したものとみなされます。
                </span>
              </div>
            </li>
          </ol>
        </section>
        {/* 第4条 */}
        <section>
          <h2 className="mb-4 mt-16 font-bold">第四条（禁止行為）</h2>
          <p>
            本サービスの利用に際し、当社は、利用者に対し、次に掲げる行為を禁止します。当社において、利用者が禁止事項に違反したと認めた場合、
            利用の一時停止その他当社が必要と判断した措置を取ることができます。
          </p>
          <ol className="m-6 list-outside list-decimal">
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  神楽または第三者の知的財産権を侵害する行為
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  神楽または第三者の名誉・信用を毀損または不当に差別もしくは誹謗中傷する行為
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  神楽から事前の許可を得ることなく、自動化手段を用いて本サービスのデータにアクセスしたり、データを取得したりすること、
                  およびアクセス許可のないデータへのアクセスを試みることは禁止されています。
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  神楽に許可なくスクリーンショットをすることは禁止されています
                </span>
              </div>
            </li>
            <li className="py-1">
              <div className="flex items-start">
                <span className="whitespace-pre-line">
                  その他、当社が不適切と判断した行為
                </span>
              </div>
            </li>
          </ol>
        </section>
        <section className="mt-16 flex justify-center">
          なまえいれろ
          <button>同意</button>
          <button>やだ</button>
        </section>
      </div>
    </section>
  );
};
