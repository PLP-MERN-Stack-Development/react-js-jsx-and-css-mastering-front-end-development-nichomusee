import Layout from '@/components/Layout'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Home() {
  return (
    <Layout>
      <Card title="Welcome">
        <p>This is the home page of your React assignment.</p>
        <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
          Click Me
        </Button>
      </Card>
    </Layout>
  );
}
