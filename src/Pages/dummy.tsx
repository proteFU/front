import type { PlayListThumbnailProps } from '../Shared/PlayListTumbnaill/PlayListThumbnail.tsx';
import type {SongThumbnaillProps} from '../Shared/SongTumbnaill/SongThumbnaill.tsx';
import img1 from '../assets/dummyImage/1.JPG';
import img2 from '../assets/dummyImage/2.JPG';
import img3 from '../assets/dummyImage/3.JPG';
import img4 from '../assets/dummyImage/4.JPG';
import img5 from '../assets/dummyImage/5.JPG';
import img6 from '../assets/dummyImage/6.JPG';
import img7 from '../assets/dummyImage/7.JPG';


export const PlayListThumbnailData : PlayListThumbnailProps[] = [
  { title : '대한민국 탑 100', songsCount: 100, time: '6h', },
  { title : '미국 탑 100', songsCount: 100, time: '6h', },
  { title : '중국 탑 100', songsCount: 100, time: '6h', },
  { title : '일본 탑 100', songsCount: 100, time: '6h', },
  { title : '전세계 탑 100', songsCount: 100, time: '6h', },
  { title : '외계 탑 100', songsCount: 100, time: '6h', },
]

export const SongThumbnaillData : SongThumbnaillProps[] = [
  {img : img1, title : '휘바람', artists : 'dl문세'},
  {img : img2, title : '최종화', artists : '아이리 칸나'},
  {img : img3, title : '여로', artists : '아라하시 타비'},
  {img : img4, title : '내꺼하는법', artists : '아야츠노 유니'},
  {img : img5, title : '낙서', artists : '비아(via)'},
  {img : img6, title : '박동현', artists : '귀엽다'},
  {img : img7, title : '박동현', artists : '내꺼'},
]