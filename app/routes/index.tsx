import { ChooseUs, CoverWorld, Footer, Home, Pricing } from '~/components';
export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <Home />
      
      <ChooseUs />
      <CoverWorld />
      <Pricing />
      <Footer />
    </div>
  );
}
