import style from './HomePageRelatedSubjectDiffTable.module.css';

const HomePageRelatedSubjectDiffTable = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.topLeftCell}>科目名</th>
            <th>関連科目の種類</th>
            <th>修正前</th>
            <th>修正後</th>
            <th className={style.topRightCell}>修正理由</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>キャリアデザインⅠ（自己理解）</th>
            <td>後継科目（推奨）</td>
            <td>
              <ul>
                <li>キャリアデザインⅡ（仕事理解）</li>
                <li>キャリアデザインⅢ（就活実践）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>キャリアデザインⅡ（仕事理解）</li>
              </ul>
            </td>
            <td>a</td>
          </tr>
          <tr>
            <th>英語コミュニケーションⅡ（日常会話）</th>
            <td>後継科目（推奨）</td>
            <td>
              <ul>
                <li>英語コミュニケーションⅡ（日常会話）</li>
                <li>英語コミュニケーションⅢ（プレゼンテーション）</li>
                <li>英語コミュニケーションⅣ（ビジネス会話）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>英語コミュニケーションⅢ（プレゼンテーション）</li>
                <li>英語コミュニケーションⅣ（ビジネス会話）</li>
              </ul>
            </td>
            <td>c</td>
          </tr>
          <tr>
            <th>Inter-universal Teichmüller Theory 1（宇宙際タイヒミューラー理論 1）</th>
            <td>後継科目（推奨）</td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 2（宇宙際タイヒミューラー理論 2）</li>
                <li>Inter-universal Teichmüller Theory 4（宇宙際タイヒミューラー理論 4）</li>
                <li>Inter-universal Teichmüller Theory 3（宇宙際タイヒミューラー理論 3）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 2（宇宙際タイヒミューラー理論 2）</li>
              </ul>
            </td>
            <td>a</td>
          </tr>
          <tr>
            <th>キャリアデザインⅢ（就活実践）</th>
            <td>前提科目（推奨）</td>
            <td>
              <ul>
                <li>キャリアデザインⅠ（自己理解）</li>
                <li>キャリアデザインⅡ（仕事理解）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>キャリアデザインⅡ（仕事理解）</li>
              </ul>
            </td>
            <td>a</td>
          </tr>
          <tr>
            <th>AIアルゴリズム実践</th>
            <td>後継科目（推奨）</td>
            <td>
              <ul>
                <li>マーケティング×データサイエンス</li>
                <li>データサイエンス実践Ⅱ（モデリング）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>マーケティング × データサイエンス</li>
                <li>データサイエンス実践Ⅱ（モデリング）</li>
              </ul>
            </td>
            <td>b</td>
          </tr>
          <tr>
            <th>Inter-universal Teichmüller Theory 2（宇宙際タイヒミューラー理論 2）</th>
            <td>後継科目（推奨）</td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 3（宇宙際タイヒミューラー理論 3）</li>
                <li>Inter-universal Teichmüller Theory 4（宇宙際タイヒミューラー理論 4）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 3（宇宙際タイヒミューラー理論 3）</li>
              </ul>
            </td>
            <td>a</td>
          </tr>
          <tr>
            <th rowSpan={2}>Inter-universal Teichmüller Theory 3（宇宙際タイヒミューラー理論 3）</th>
            <td>前提科目（推奨）</td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 1（宇宙際タイヒミューラー理論 1）</li>
                <li>Inter-universal Teichmüller Theory 2（宇宙際タイヒミューラー理論 2）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 2（宇宙際タイヒミューラー理論 2）</li>
              </ul>
            </td>
            <td>a</td>
          </tr>
          <tr>
            <td>後継科目（推奨）</td>
            <td>
              <ul>
                <li>Inter-universalTeichmüllerTheory4（宇宙際タイヒミューラー理論4）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 4（宇宙際タイヒミューラー理論 4）</li>
              </ul>
            </td>
            <td>b</td>
          </tr>
          <tr>
            <th>ディープラーニング3</th>
            <td>前提科目（推奨）</td>
            <td>
              <ul>
                <li>ディープラーニング1</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>ディープラーニング2</li>
              </ul>
            </td>
            <td>c</td>
          </tr>
          <tr>
            <th className={style.bottomLeftCell}>Inter-universal Teichmüller Theory 4（宇宙際タイヒミューラー理論 4）</th>
            <td>前提科目（推奨）</td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 1（宇宙際タイヒミューラー理論 1）</li>
                <li>Inter-universal Teichmüller Theory 2（宇宙際タイヒミューラー理論 2）</li>
                <li>Inter-universal Teichmüller Theory 3（宇宙際タイヒミューラー理論 3）</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Inter-universal Teichmüller Theory 3（宇宙際タイヒミューラー理論 3）</li>
              </ul>
            </td>
            <td className={style.bottomRightCell}>a</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePageRelatedSubjectDiffTable;
