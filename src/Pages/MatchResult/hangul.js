const STROKES = {
    // 한글의 획수를 담은 객체
    ㄱ: 1,
    ㄲ: 2,
    ㄴ: 1,
    ㄷ: 2,
    ㄸ: 4,
    ㄹ: 3,
    ㅁ: 3,
    ㅂ: 4,
    ㅃ: 8,
    ㅅ: 2,
    ㅆ: 4,
    ㅇ: 1,
    ㅈ: 2,
    ㅉ: 4,
    ㅊ: 3,
    ㅋ: 2,
    ㅌ: 3,
    ㅍ: 4,
    ㅎ: 3,
    ㄳ: 3,
    ㄵ: 4,
    ㄶ: 4,
    ㄺ: 5,
    ㄻ: 6,
    ㄼ: 7,
    ㄽ: 5,
    ㄾ: 6,
    ㄿ: 7,
    ㅀ: 6,
    ㅄ: 6,
    ㅏ: 2,
    ㅐ: 3,
    ㅑ: 3,
    ㅒ: 4,
    ㅓ: 2,
    ㅔ: 3,
    ㅕ: 3,
    ㅖ: 4,
    ㅗ: 2,
    ㅘ: 4,
    ㅙ: 5,
    ㅚ: 3,
    ㅛ: 3,
    ㅜ: 2,
    ㅝ: 4,
    ㅞ: 5,
    ㅟ: 3,
    ㅠ: 3,
    ㅡ: 1,
    ㅢ: 2,
    ㅣ: 1,
};

const counting = (name) => {
    // 각 획수를 구해서 보내준다
    let cnt = [];
    for (let i = 0; i < name.length; i++) {
        let count = 0;
        for (let j = 0; j < name[i].length; j++) {
            count += Number(STROKES[name[i][j]]);
        }
        cnt[i] = count;
    }
    return cnt;
};

export { counting };
