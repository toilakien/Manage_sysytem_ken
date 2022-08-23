import { Container, Grid, styled, Typography } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import '../../styles/overview.css';
import BoxItem from './BoxItem';
import { useSelector } from 'src/store';
import { useEffect } from 'react';

const OverView = () => {
  const OverViewWrapper = styled(Grid)({
    p: 2,
    borderRadius: '10px',
    backgroundColor: '#84ffff',
    height: '100vh',
    width: '100%'
  });
  const countDepartment=useSelector(state=>state.department.department.length)

  
  return (
    <Container>
      <PageTitleWrapper>
        <Typography variant='h1'>Over view</Typography>
      </PageTitleWrapper>
      <OverViewWrapper>
        <Typography variant='h2' sx={{ color:"#303f9f",p:2,textAlign: 'center' }}>
          STATISTICS OF RECRUITMENT RESULTS
        </Typography>
        <div className="row">
          <BoxItem clBox='bgRed'clBtn='bgRedBtn' number={countDepartment} question="Department"/> 
          <BoxItem clBox='bgYellow'clBtn='bgYellowBtn' number={'6'} question="Question"/> 
          <BoxItem clBox='bgBlue'clBtn='bgBlueBtn' number={'46'} question="Rank"/> 
          <BoxItem clBox='bgGreen'clBtn='bgGreenBtn' number={'23'} question="Language"/> 
        </div>
      </OverViewWrapper>
    </Container>
  );
};
export default OverView;
