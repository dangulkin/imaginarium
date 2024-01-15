import { Layout } from 'antd'
import { usePagesRoutes } from '../router'
import { LFooter } from './footer'
import { LHeader } from './header'
import { contentStyle } from '../assets/antdStyle'

export const Pages = () => {
  const { Content } = Layout
  const pages = usePagesRoutes()
  return (
    <>
      <Layout>
        <LHeader />
        <Content style={contentStyle}>{pages}</Content>
        <LFooter />
      </Layout>
    </>
  )
}
