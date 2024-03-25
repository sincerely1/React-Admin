import { Card, Col, Row, } from 'antd';
import Color from 'color';

import person from '@/assets/images/cover/add_person.png';
import team from '@/assets/images/cover/add_team.png';
import today from '@/assets/images/cover/today.png';
import book_sum from '@/assets/images/cover/book_sum.png';
import LineChart from './components/line-chart'
import PicChart from './components/pie-chart'
import { useThemeToken } from '@/theme/hooks';

import AnalysisCard from './components/analysis-card';

function Workbench() {
  const theme = useThemeToken();
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col lg={6} md={12} span={24}>
          <AnalysisCard
            cover={person}
            title="1111"
            subtitle="访问总人数"
            style={{
             
              background: `linear-gradient(135deg, ${Color(theme.colorPrimaryActive)
                .alpha(0.2)
                .toString()}, ${Color(theme.colorPrimary)
                .alpha(0.2)
                .toString()}) rgb(255, 255, 255)`,
            }}
          />
        </Col>
        <Col lg={6} md={12} span={24}>
          <AnalysisCard
            cover={today}
            title="222"
            subtitle="今日访问数量"
            style={{
            
              background: `linear-gradient(135deg, ${Color(theme.colorInfoActive)
                .alpha(0.2)
                .toString()}, ${Color(theme.colorInfo).alpha(0.2).toString()}) rgb(255, 255, 255)`,
            }}
          />
        </Col>
        <Col lg={6} md={12} span={24}>
          <AnalysisCard
            cover={team}
            title="3333"
            subtitle="Issue 数量"
            style={{
            
              background: `linear-gradient(135deg, ${Color(theme.colorSuccessActive)
                .alpha(0.2)
                .toString()}, ${Color(theme.colorSuccess)
                .alpha(0.2)
                .toString()}) rgb(255, 255, 255)`,
            }}
          />
        </Col>
        <Col lg={6} md={12} span={24}>
          <AnalysisCard
            cover={book_sum}
            title="4444"
            subtitle="Star 数量"
            style={{
             
              background: `linear-gradient(135deg, ${Color(theme.colorWarningActive)
                .alpha(0.2)
                .toString()}, ${Color(theme.colorWarning).alpha(0.2).toString()}) rgb(255, 255, 255)`,
            }}
          />
        </Col>
      </Row>

     <Row gutter={[16, 16]} className="mt-8" justify="center">
        <Col span={23} lg={12} xl={16}>
          <Card title="访问数量">
            <LineChart />
          </Card>
        </Col>
        <Col span={23} lg={12} xl={8}>
          <Card title="访问来源">
            <PicChart />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Workbench;
