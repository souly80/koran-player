import uniqBy from 'lodash/uniqBy';
import { setArtistIds } from './artistActions';
import {getDurationFotmatted} from "../utils/utils";

export const fetchSongsPending = () => {
  return {
    type: 'FETCH_SONGS_PENDING'
  };
};

export const fetchSongsSuccess = (songs) => {
  return {
    type: 'FETCH_SONGS_SUCCESS',
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: 'FETCH_SONGS_ERROR'
  };
};

let ahzab = [
    {
        id:114,
        title: "الحزب الأول",
        artist: "عبد المجيب بنكيران",
        url: "H01.mp3",
        duration: 1248.656
        ,
    },
    {
        id:115,
        title: "الحزب الثاني",
        artist: "عبد المجيب بنكيران",
        url: "H02.mp3",
        duration: 1360.592,
    },
    {
        id:116,
        title: "الحزب الثالث",
        artist: "عبد المجيب بنكيران",
        url: "H03.mp3",
        duration: 1361.384,
    },
    {
        id:117,
        title: "الحزب الرابع",
        artist: "عبد المجيب بنكيران",
        url: "H04.mp3",
        duration: 1364.504,
    },
    {
        id:118,
        title: "الحزب الخامس",
        artist: "عبد المجيب بنكيران",
        url: "H05.mp3",
        duration: 1270.232,
    },
    {
        id:119,
        title: "الحزب السادس",
        artist: "عبد المجيب بنكيران",
        url: "H06.mp3",
        duration: 1912.232,
    },
    {
        id:120,
        title: "الحزب السابع",
        artist: "عبد المجيب بنكيران",
        url: "H07.mp3",
        duration: 1678.352,
    },
    {
        id:121,
        title: "الحزب الثامن",
        artist: "عبد المجيب بنكيران",
        url: "H08.mp3",
        duration: 1552.112,
    },
    {
        id:122,
        title: "الحزب التاسع",
        artist: "عبد المجيب بنكيران",
        url: "H09.mp3",
        duration: 1650.704,
    },
    {
        id:123,
        title: "الحزب العاشر",
        artist: "عبد المجيب بنكيران",
        url: "H10.mp3",
        duration: 1715.792,
    },
    {
        id:124,
        title: "الحزب الحادي عشر",
        artist: "عبد المجيب بنكيران",
        url: "H11.mp3",
        duration: 1803.992,
    },
    {
        id:125,
        title: "الحزب الثاني عشر",
        artist: "عبد المجيب بنكيران",
        url: "H12.mp3",
        duration: 1718.336,
    },
    {
        id:126,
        title: "الحزب الثالث عشر",
        artist: "عبد المجيب بنكيران",
        url: "H13.mp3",
        duration: 1869.992,
    },
    {
        id:127,
        title: "الحزب الرابع عشر",
        artist: "عبد المجيب بنكيران",
        url: "H14.mp3",
        duration: 1847.312,
    },
    {
        id:128,
        title: "الحزب الخامس عشر",
        artist: "عبد المجيب بنكيران",
        url: "H15.mp3",
        duration: 1616.696,
    },
    {
        id:129,
        title: "الحزب السادس عشر",
        artist: "عبد المجيب بنكيران",
        url: "H16.mp3",
        duration: 1751.912,
    },
    {
        id:130,
        title: "الحزب السابع عشر",
        artist: "عبد المجيب بنكيران",
        url: "H17.mp3",
        duration: 1695.944,
    },
    {
        id:131,
        title: "الحزب الثامن عشر",
        artist: "عبد المجيب بنكيران",
        url: "H18.mp3",
        duration: 1473.152,
    },
    {
        id:132,
        title: "الحزب التاسع عشر",
        artist: "عبد المجيب بنكيران",
        url: "H19.mp3",
        duration: 1951.424,
    },
    {
        id:133,
        title: "الحزب العشرون",
        artist: "عبد المجيب بنكيران",
        url: "H20.mp3",
        duration: 1527.104,
    },
    {
        id:134,
        title: "الحزب الواحد والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H21.mp3",
        duration: 1765.616,
    },
    {
        id:135,
        title: "الحزب الثاني والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H22.mp3",
        duration: 1753.736,
    },
    {
        id:136,
        title: "الحزب الثالث والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H23.mp3",
        duration: 1721.096,
    },
    {
        id:137,
        title: "الحزب الرابع والعشرون",
        artist: "الحزب الرابع والعشرون",
        url: "H24.mp3",
        duration: 1859.504,
    },
    {
        id:138,
        title: "الحزب الخامس والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H25.mp3",
        duration: 1753.712,
    },
    {
        id:139,
        title: "الحزب السادس والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H26.mp3",
        duration: 1887.152,
    },
    {
        id:140,
        title: "الحزب السابع والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H27.mp3",
        duration: 1833.224,
    },
    {
        id:141,
        title: "الحزب الثامن والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H28.mp3",
        duration: 1622.576,
    },
    {
        id:142,
        title: "الحزب التاسع والعشرون",
        artist: "عبد المجيب بنكيران",
        url: "H29.mp3",
        duration: 1983.344,
    },
    {
        id:143,
        title: "الحزب الثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H30.mp3",
        duration: 1915.136,
    },
    {
        id:144,
        title: "الحزب الواحد والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H31.mp3",
        duration: 1945.136,
    },
    {
        id:145,
        title: "الحزب الثاني والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H32.mp3",
        duration: 1557.176,
    },
    {
        id:146,
        title: "الحزب الثالث والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H33.mp3",
        duration: 1573.184,
    },
    {
        id:147,
        title: "الحزب الرابع والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H34.mp3",
        duration: 1684.112,
    },
    {
        id:148,
        title: "الحزب الخامس والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H35.mp3",
        duration: 1967.312,
    },
    {
        id:149,
        title: "الحزب السادس والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H36.mp3",
        duration: 1924.304,
    },
    {
        id:150,
        title: "الحزب السابع والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H37.mp3",
        duration: 1809.704,
    },
    {
        id:151,
        title: "الحزب الثامن والثلاثونء",
        artist: "عبد المجيب بنكيران",
        url: "H38.mp3",
        duration: 1875.752,
    },
    {
        id:152,
        title: "الحزب التاسع والثلاثون",
        artist: "عبد المجيب بنكيران",
        url: "H39.mp3",
        duration: 1796.144,
    },
    {
        id:153,
        title: "الحزب الأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H40.mp3",
        duration: 1826.336,
    },
    {
        id:154,
        title: "الحزب الواحد والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H41.mp3",
        duration: 2064.152,
    },
    {
        id:155,
        title: "الحزب الثاني والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H42.mp3",
        duration: 1518.896,
    },
    {
        id:156,
        title: "الحزب الثالث والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H43.mp3",
        duration: 1757.864,
    },
    {
        id:157,
        title: "الحزب الرابع والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H44.mp3",
        duration: 2084.144,
    },
    {
        id:158,
        title: "الحزب الخامس والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H45.mp3",
        duration: 1752.272,
    },
    {
        id:159,
        title: "الحزب السادس والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H46.mp3",
        duration: 1939.832,
    },
    {
        id:160,
        title: "الحزب السابع والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H47.mp3",
        duration: 1795.664,
    },
    {
        id:161,
        title: "الحزب الثامن والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H48.mp3",
        duration: 1948.472,
    },
    {
        id:162,
        title: "الحزب التاسع والأربعون",
        artist: "عبد المجيب بنكيران",
        url: "H49.mp3",
        duration: 1881.872,
    },
    {
        id:163,
        title: "الحزب الخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H50.mp3",
        duration: 2178.032,
    },
    {
        id:164,
        title: "الحزب الواحد والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H51.mp3",
        duration: 2075.192,
    },
    {
        id:165,
        title: "الحزب الثاني والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H52.mp3",
        duration: 1591.496,
    },
    {
        id:166,
        title: "الحزب الثالث والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H53.mp3",
        duration: 1751.912,
    },
    {
        id:167,
        title: "الحزب الرابع والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H54.mp3",
        duration: 2040.896,
    },
    {
        id:168,
        title: "الحزب الخامس والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H55.mp3",
        duration: 2309.624,
    },
    {
        id:169,
        title: "الحزب السادس والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H56.mp3",
        duration: 1700.816,
    },
    {
        id:170,
        title: "الحزب السابع والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H57.mp3",
        duration: 1967.192
    },
    {
        id:171,
        title: "الحزب الثامن والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H58.mp3",
        duration: 1786.784,
    },
    {
        id:172,
        title: "الحزب التاسع والخمسون",
        artist: "عبد المجيب بنكيران",
        url: "H59.mp3",
        duration: 1547.024,
    },
    {
        id:173,
        title: "الحزب الستون",
        artist: "عبد المجيب بنكيران",
        url: "H60.mp3",
        duration: 1769.984,
    }
];

export const fetchAhzab = () => {
  return dispatch => {
      ahzab.forEach(function(surat, index) {
          ahzab[index].duration_ms = getDurationFotmatted(surat.duration);
      });
      dispatch(fetchSongsSuccess(ahzab));
  };
};

let surats = [
    {
        id:0,
        title: "سورة الفاتحة",
        artist: "عبد المجيب بنكيران",
        url: "001.mp3",
        duration: 55.502429
        ,
    },
    {
        id:1,
        title: "سورة البقرة",
        artist: "عبد المجيب بنكيران",
        url: "002.mp3",
        duration: 7669.621571,
    },
    {
        id:2,
        title: "سورة آل عمران",
        artist: "عبد المجيب بنكيران",
        url: "003.mp3",
        duration: 4055.006,
    },
    {
        id:3,
        title: "سورة النساء",
        artist: "عبد المجيب بنكيران",
        url: "004.mp3",
        duration: 4169.448429,
    },
    {
        id:4,
        title: "سورة المائدة",
        artist: "عبد المجيب بنكيران",
        url: "005.mp3",
        duration: 3114.702429,
    },
    {
        id:5,
        title: "سورة الأنعام",
        artist: "عبد المجيب بنكيران",
        url: "006.mp3",
        duration: 2006.022,
    },
    {
        id:6,
        title: "سورة الأعراف",
        artist: "عبد المجيب بنكيران",
        url: "007.mp3",
        duration: 3941.504,
    },
    {
        id:7,
        title: "سورة الأنفال",
        artist: "عبد المجيب بنكيران",
        url: "008.mp3",
        duration: 1476.276286,
    },
    {
        id:8,
        title: "سورة التوبة",
        artist: "عبد المجيب بنكيران",
        url: "009.mp3",
        duration: 2999.737429,
    },
    {
        id:9,
        title: "سورة يونس",
        artist: "عبد المجيب بنكيران",
        url: "010.mp3",
        duration: 2075.864857,
    },
    {
        id:10,
        title: "سورة هود",
        artist: "عبد المجيب بنكيران",
        url: "011.mp3",
        duration: 2195.766857,
    },
    {
        id:11,
        title: "سورة يوسف",
        artist: "عبد المجيب بنكيران",
        url: "012.mp3",
        duration: 2121.735857,
    },
    {
        id:12,
        title: "سورة الرعد",
        artist: "عبد المجيب بنكيران",
        url: "013.mp3",
        duration: 1009.233,
    },
    {
        id:13,
        title: "سورة إبراهيم",
        artist: "عبد المجيب بنكيران",
        url: "014.mp3",
        duration: 1013.177429,
    },
    {
        id:14,
        title: "سورة الحجر",
        artist: "عبد المجيب بنكيران",
        url: "015.mp3",
        duration: 788.681143,
    },
    {
        id:15,
        title: "سورة النحل",
        artist: "عبد المجيب بنكيران",
        url: "016.mp3",
        duration: 2155.381571,
    },
    {
        id:16,
        title: "سورة الإسراء",
        artist: "عبد المجيب بنكيران",
        url: "017.mp3",
        duration: 1795.362,
    },
    {
        id:17,
        title: "سورة الكهف",
        artist: "عبد المجيب بنكيران",
        url: "018.mp3",
        duration: 1741.497429,
    },
    {
        id:18,
        title: "سورة مريم",
        artist: "عبد المجيب بنكيران",
        url: "019.mp3",
        duration: 1058.970143,
    },
    {
        id:19,
        title: "سورة طه",
        artist: "عبد المجيب بنكيران",
        url: "020.mp3",
        duration: 1407.652571,
    },
    {
        id:20,
        title: "سورة الأنبياء",
        artist: "عبد المجيب بنكيران",
        url: "021.mp3",
        duration: 1445.895857,
    },
    {
        id:21,
        title: "سورة الحج",
        artist: "عبد المجيب بنكيران",
        url: "022.mp3",
        duration: 1593.801143,
    },
    {
        id:22,
        title: "سورة المؤمنون",
        artist: "عبد المجيب بنكيران",
        url: "023.mp3",
        duration: 1311.835429,
    },
    {
        id:23,
        title: "سورة النور",
        artist: "عبد المجيب بنكيران",
        url: "024.mp3",
        duration: 1675.799571,
    },
    {
        id:24,
        title: "سورة الفرقان",
        artist: "عبد المجيب بنكيران",
        url: "025.mp3",
        duration: 1048.860714,
    },
    {
        id:25,
        title: "سورة الشعراء",
        artist: "عبد المجيب بنكيران",
        url: "026.mp3",
        duration: 1623.476143,
    },
    {
        id:26,
        title: "سورة النمل",
        artist: "عبد المجيب بنكيران",
        url: "027.mp3",
        duration: 1397.229714,
    },
    {
        id:27,
        title: "سورة القصص",
        artist: "عبد المجيب بنكيران",
        url: "028.mp3",
        duration: 1700.276286,
    },
    {
        id:28,
        title: "سورة العنكبوت",
        artist: "عبد المجيب بنكيران",
        url: "029.mp3",
        duration: 1293.471286,
    },
    {
        id:29,
        title: "سورة الروم",
        artist: "عبد المجيب بنكيران",
        url: "030.mp3",
        duration: 1022.555429,
    },
    {
        id:30,
        title: "سورة لقمان",
        artist: "عبد المجيب بنكيران",
        url: "031.mp3",
        duration: 622.620714,
    },
    {
        id:31,
        title: "سورة السجدة",
        artist: "عبد المجيب بنكيران",
        url: "032.mp3",
        duration: 425.344,
    },
    {
        id:32,
        title: "سورة الأحزاب",
        artist: "عبد المجيب بنكيران",
        url: "033.mp3",
        duration: 1562.114571,
    },
    {
        id:33,
        title: "سورة سبأ",
        artist: "عبد المجيب بنكيران",
        url: "034.mp3",
        duration: 979.113857,
    },
    {
        id:34,
        title: "سورة فاطر",
        artist: "عبد المجيب بنكيران",
        url: "035.mp3",
        duration: 879.117,
    },
    {
        id:35,
        title: "سورة يس",
        artist: "عبد المجيب بنكيران",
        url: "036.mp3",
        duration: 846.673,
    },
    {
        id:36,
        title: "سورة الصافات",
        artist: "عبد المجيب بنكيران",
        url: "037.mp3",
        duration: 1049.618286,
    },
    {
        id:37,
        title: "سورة صء",
        artist: "عبد المجيب بنكيران",
        url: "038.mp3",
        duration: 830.764429,
    },
    {
        id:38,
        title: "سورة الزمر",
        artist: "عبد المجيب بنكيران",
        url: "039.mp3",
        duration: 1324.557,
    },
    {
        id:39,
        title: "سورة غافر",
        artist: "عبد المجيب بنكيران",
        url: "040.mp3",
        duration: 1334.483714,
    },
    {
        id:40,
        title: "سورة فصلت",
        artist: "عبد المجيب بنكيران",
        url: "041.mp3",
        duration: 936.403571,
    },
    {
        id:41,
        title: "سورة الشورى",
        artist: "عبد المجيب بنكيران",
        url: "042.mp3",
        duration: 969.970857,
    },
    {
        id:42,
        title: "سورة الزخرف",
        artist: "عبد المجيب بنكيران",
        url: "043.mp3",
        duration: 995.623143,
    },
    {
        id:43,
        title: "سورة الدخان",
        artist: "عبد المجيب بنكيران",
        url: "044.mp3",
        duration: 437.491,
    },
    {
        id:44,
        title: "سورة الجاثية",
        artist: "عبد المجيب بنكيران",
        url: "045.mp3",
        duration: 570.872143,
    },
    {
        id:45,
        title: "سورة الأحقاف",
        artist: "عبد المجيب بنكيران",
        url: "046.mp3",
        duration: 768.096714,
    },
    {
        id:46,
        title: "سورة محمد",
        artist: "عبد المجيب بنكيران",
        url: "047.mp3",
        duration: 638.686,
    },
    {
        id:47,
        title: "سورة الفتح",
        artist: "عبد المجيب بنكيران",
        url: "048.mp3",
        duration: 664.207714,
    },
    {
        id:48,
        title: "سورة الحجرات",
        artist: "عبد المجيب بنكيران",
        url: "049.mp3",
        duration: 421.399429,
    },
    {
        id:49,
        title: "سورة ق",
        artist: "عبد المجيب بنكيران",
        url: "050.mp3",
        duration: 429.053429,
    },
    {
        id:50,
        title: "سورة الذاريات",
        artist: "عبد المجيب بنكيران",
        url: "051.mp3",
        duration: 442.976571,
    },
    {
        id:51,
        title: "سورة الطور",
        artist: "عبد المجيب بنكيران",
        url: "052.mp3",
        duration: 400.318714,
    },
    {
        id:52,
        title: "سورة النجم",
        artist: "عبد المجيب بنكيران",
        url: "053.mp3",
        duration: 392.064,
    },
    {
        id:53,
        title: "سورة القمر",
        artist: "عبد المجيب بنكيران",
        url: "054.mp3",
        duration: 396.541714,
    },
    {
        id:54,
        title: "سورة الرحمن",
        artist: "عبد المجيب بنكيران",
        url: "055.mp3",
        duration: 481.167571,
    },
    {
        id:55,
        title: "سورة الواقعة",
        artist: "عبد المجيب بنكيران",
        url: "056.mp3",
        duration: 526.255,
    },
    {
        id:56,
        title: "سورة الحديد",
        artist: "عبد المجيب بنكيران",
        url: "057.mp3",
        duration: 647.855143,
    },
    {
        id:57,
        title: "سورة المجادلة",
        artist: "عبد المجيب بنكيران",
        url: "058.mp3",
        duration: 582.104714,
    },
    {
        id:58,
        title: "سورة الحشر",
        artist: "عبد المجيب بنكيران",
        url: "059.mp3",
        duration: 576.227286,
    },
    {
        id:59,
        title: "سورة الممتحنة",
        artist: "عبد المجيب بنكيران",
        url: "060.mp3",
        duration: 453.321143,
    },
    {
        id:60,
        title: "سورة الصف",
        artist: "عبد المجيب بنكيران",
        url: "061.mp3",
        duration: 281.487714,
    },
    {
        id:61,
        title: "سورة الجمعة",
        artist: "عبد المجيب بنكيران",
        url: "062.mp3",
        duration: 220.883571,
    },
    {
        id:62,
        title: "سورة المنافقون",
        artist: "عبد المجيب بنكيران",
        url: "063.mp3",
        duration: 238.986429,
    },
    {
        id:63,
        title: "سورة التغابن",
        artist: "عبد المجيب بنكيران",
        url: "064.mp3",
        duration: 284.021571,
    },
    {
        id:64,
        title: "سورة الطلاق",
        artist: "عبد المجيب بنكيران",
        url: "065.mp3",
        duration: 340.341571,
    },
    {
        id:65,
        title: "سورة التحريم",
        artist: "عبد المجيب بنكيران",
        url: "066.mp3",
        duration: 306.460714,
    },
    {
        id:66,
        title: "سورة الملك",
        artist: "عبد المجيب بنكيران",
        url: "067.mp3",
        duration: 390.601143,
    },
    {
        id:67,
        title: "سورة القلم",
        artist: "عبد المجيب بنكيران",
        url: "068.mp3",
        duration: 390.836143

        ,
    },
    {
        id:68,
        title: "سورة الحاقة",
        artist: "عبد المجيب بنكيران",
        url: "069.mp3",
        duration: 338.722,
    },
    {
        id:69,
        title: "سورة المعارج",
        artist: "عبد المجيب بنكيران",
        url: "070.mp3",
        duration: 265.918714,
    },
    {
        id:70,
        title: "سورة نوح",
        artist: "عبد المجيب بنكيران",
        url: "071.mp3",
        duration: 280.730143,
    },
    {
        id:71,
        title: "سورة الجن",
        artist: "عبد المجيب بنكيران",
        url: "072.mp3",
        duration: 316.361143,
    },
    {
        id:72,
        title: "سورة المزمل",
        artist: "عبد المجيب بنكيران",
        url: "073.mp3",
        duration: 258.630571,
    },
    {
        id:73,
        title: "سورة المدثر",
        artist: "عبد المجيب بنكيران",
        url: "074.mp3",
        duration: 314.323571,
    },
    {
        id:74,
        title: "سورة القيامة",
        artist: "عبد المجيب بنكيران",
        url: "075.mp3",
        duration: 203.904,
    },
    {
        id:75,
        title: "سورة الإنسان",
        artist: "عبد المجيب بنكيران",
        url: "076.mp3",
        duration: 315.629714,
    },
    {
        id:76,
        title: "سورة المرسلات",
        artist: "عبد المجيب بنكيران",
        url: "077.mp3",
        duration: 266.388857

        ,
    },
    {
        id:77,
        title: "سورة النبأ",
        artist: "عبد المجيب بنكيران",
        url: "078.mp3",
        duration: 258.082,
    },
    {
        id:78,
        title: "سورة النازعات",
        artist: "عبد المجيب بنكيران",
        url: "079.mp3",
        duration: 228.119429,
    },
    {
        id:79,
        title: "سورة عبس",
        artist: "عبد المجيب بنكيران",
        url: "080.mp3",
        duration: 185.513857,
    },
    {
        id:80,
        title: "سورة التكوير",
        artist: "عبد المجيب بنكيران",
        url: "081.mp3",
        duration: 128.854143,
    },
    {
        id:81,
        title: "سورة الانفطار",
        artist: "عبد المجيب بنكيران",
        url: "082.mp3",
        duration: 97.873,
    },
    {
        id:82,
        title: "سورة المطففين",
        artist: "عبد المجيب بنكيران",
        url: "083.mp3",
        duration: 207.848571,
    },
    {
        id:83,
        title: "سورة الانشقاق",
        artist: "عبد المجيب بنكيران",
        url: "084.mp3",
        duration: 126.842714,
    },
    {
        id:84,
        title: "سورة البروج",
        artist: "عبد المجيب بنكيران",
        url: "085.mp3",
        duration: 133.451714,
    },
    {
        id:85,
        title: "سورة الطارق",
        artist: "عبد المجيب بنكيران",
        url: "086.mp3",
        duration: 71.228143,
    },
    {
        id:86,
        title: "سورة الأعلى",
        artist: "عبد المجيب بنكيران",
        url: "087.mp3",
        duration: 82.788714,
    },
    {
        id:87,
        title: "سورة الغاشية",
        artist: "عبد المجيب بنكيران",
        url: "088.mp3",
        duration: 119.476286,
    },
    {
        id:88,
        title: "سورة الفجر",
        artist: "عبد المجيب بنكيران",
        url: "089.mp3",
        duration: 167.646,
    },
    {
        id:89,
        title: "سورة البلد",
        artist: "عبد المجيب بنكيران",
        url: "090.mp3",
        duration: 91.655857,
    },
    {
        id:90,
        title: "سورة الشمس",
        artist: "عبد المجيب بنكيران",
        url: "091.mp3",
        duration: 75.172571,
    },
    {
        id:91,
        title: "سورة الليل",
        artist: "عبد المجيب بنكيران",
        url: "092.mp3",
        duration: 87.580714,
    },
    {
        id:92,
        title: "سورة الضحى",
        artist: "عبد المجيب بنكيران",
        url: "093.mp3",
        duration: 51.531857,
    },
    {
        id:93,
        title: "سورة الشرح",
        artist: "عبد المجيب بنكيران",
        url: "094.mp3",
        duration: 28.857429,
    },
    {
        id:94,
        title: "سورة التين",
        artist: "عبد المجيب بنكيران",
        url: "095.mp3",
        duration: 41.944857,
    },
    {
        id:95,
        title: "سورة العلق",
        artist: "عبد المجيب بنكيران",
        url: "096.mp3",
        duration: 83.714571,
    },
    {
        id:96,
        title: "سورة القدر",
        artist: "عبد المجيب بنكيران",
        url: "097.mp3",
        duration: 39.410857,
    },
    {
        id:97,
        title: "سورة البينة",
        artist: "عبد المجيب بنكيران",
        url: "098.mp3",
        duration: 111.509,
    },
    {
        id:98,
        title: "سورة الزلزلة",
        artist: "عبد المجيب بنكيران",
        url: "099.mp3",
        duration: 46.594571,
    },
    {
        id:99,
        title: "سورة العاديات",
        artist: "عبد المجيب بنكيران",
        url: "100.mp3",
        duration: 52.419857,
    },
    {
        id:100,
        title: "سورة القارعة",
        artist: "عبد المجيب بنكيران",
        url: "101.mp3",
        duration: 44.844429,
    },
    {
        id:101,
        title: "سورة التكاثر",
        artist: "عبد المجيب بنكيران",
        url: "102.mp3",
        duration: 32.462429,
    },
    {
        id:102,
        title: "سورة العصر",
        artist: "عبد المجيب بنكيران",
        url: "103.mp3",
        duration: 16.188,
    },
    {
        id:103,
        title: "سورة الهمزة",
        artist: "عبد المجيب بنكيران",
        url: "104.mp3",
        duration: 40.978286,
    },
    {
        id:104,
        title: "سورة الفيل",
        artist: "عبد المجيب بنكيران",
        url: "105.mp3",
        duration: 30.555429,
    },
    {
        id:105,
        title: "سورة قريش",
        artist: "عبد المجيب بنكيران",
        url: "106.mp3",
        duration: 25.461571,
    },
    {
        id:106,
        title: "سورة الماعون",
        artist: "عبد المجيب بنكيران",
        url: "107.mp3",
        duration: 29.536714,
    },
    {
        id:107,
        title: "سورة الكوثر",
        artist: "عبد المجيب بنكيران",
        url: "108.mp3",
        duration: 14.464,
    },
    {
        id:108,
        title: "سورة الكافرون",
        artist: "عبد المجيب بنكيران",
        url: "109.mp3",
        duration: 31.208429,
    },
    {
        id:109,
        title: "سورة النصر",
        artist: "عبد المجيب بنكيران",
        url: "110.mp3",
        duration: 23.369143,
    },
    {
        id:110,
        title: "سورة المسد",
        artist: "عبد المجيب بنكيران",
        url: "111.mp3",
        duration: 27.786429,
    },
    {
        id:111,
        title: "سورة الإخلاص",
        artist: "عبد المجيب بنكيران",
        url: "112.mp3",
        duration: 14.176571,
    },
    {
        id:112,
        title: "سورة الفلق",
        artist: "عبد المجيب بنكيران",
        url: "113.mp3",
        duration: 25.252571,
    },
    {
        id:113,
        title: "سورة الناس",
        artist: "عبد المجيب بنكيران",
        url: "114.mp3",
        duration: 31.600429,
    }
];

export const fetchSongs = () => {
    return dispatch => {
        surats.forEach(function(surat, index) {
            surats[index].duration_ms = getDurationFotmatted(surat.duration);
        });
        dispatch(fetchSongsSuccess(surats));
    };
};

let athman = [
    {
        id:174,
        title: "ثمن 1",
        artist: "عبد المجيب بنكيران",
        url: "001.mp3",
        duration: 55.502429
        ,
    },
    {
        id:175,
        title: "ثمن 2",
        artist: "عبد المجيب بنكيران",
        url: "002.mp3",
        duration: 7669.621571,
    },
]

export const fetchAthman = () => {
    return dispatch => {
        athman.forEach(function(surat, index) {
            athman[index].duration_ms = getDurationFotmatted(surat.duration);
        });
        dispatch(fetchSongsSuccess(athman));
    };
};

export const searchSongsPending = () => {
  return {
    type: 'SEARCH_SONGS_PENDING'
  };
};

export const searchSongsSuccess = (songs) => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    songs
  };
};

export const searchSongsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR'
  };
};

export const searchSongs = (searchTerm, accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json'
      })
    });

    dispatch(searchSongsPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      res.items = res.tracks.items.map(item => {
        return {
          track: item
        };
      });
      dispatch(searchSongsSuccess(res.items));
    }).catch(err => {
      dispatch(fetchSongsError(err));
    });
  };
};

export const fetchRecentlyPlayedPending = () => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_PENDING'
  };
};

export const fetchRecentlyPlayedSuccess = (songs) => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_SUCCESS',
    songs
  };
};

export const fetchRecentlyPlayedError = () => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_ERROR'
  };
};

export const fetchRecentlyPlayed = (accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/me/player/recently-played`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchRecentlyPlayedPending());

    fetch(request).then(res => {
      return res.json();
    }).then(res => {
      //remove duplicates from recently played
      res.items = uniqBy(res.items, (item) => {
        return item.track.id;
      });
      dispatch(fetchRecentlyPlayedSuccess(res.items));
    }).catch(err => {
      dispatch(fetchRecentlyPlayedError(err));
    });
  };
};

export const playSong = (song) => {
  return {
    type: 'PLAY_SONG',
    song
  };
};

export const stopSong = () => {
  return {
    type: 'STOP_SONG'
  };
};

export const pauseSong = () => {
  return {
    type: 'PAUSE_SONG'
  };
};

export const resumeSong = () => {
  return {
    type: 'RESUME_SONG'
  };
};

export const increaseSongTime = (time) => {
  return {
    type: 'INCREASE_SONG_TIME',
    time
  };
};

export const updateViewType = (view) => {
  return {
    type: 'UPDATE_VIEW_TYPE',
    view
  };
};
