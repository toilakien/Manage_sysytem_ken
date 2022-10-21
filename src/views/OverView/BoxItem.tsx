import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

interface Props {
  clBox: string;
  clBtn: string;
  number: number | string;
  question: string;
}
const BoxItem = (props: Props) => {
  return (
    <div className={`box-item ${props.clBox}`}>
      <div className="row">
        <div className="box-item-left">
          <div className="number">{props.number}</div>
          <div className="text">{props.question}</div>
        </div>
        <div className="box-item-icon">
          <ReportGmailerrorredIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
        </div>
      </div>
      <div className="btn-box">
        <button className={`${props.clBtn}`}>More info</button>
      </div>
    </div>
  );
};

export default BoxItem;
