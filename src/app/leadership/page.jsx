import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";

export default function Leadership() {
  return (
    <>
      <Header />
      <main className="px-6 py-16">
        <h2 className="text-3xl font-light tracking-wider mb-16 text-center">Leadership & Management</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32">
          <ProfileCard
            image="[INSERT IMAGE PATH]"
            name="[INSERT NAME]"
            title="CEO & Founder"
            bio="[INSERT BIO TEXT - CEO & FOUNDER]"
          />
          <ProfileCard
            image="[INSERT IMAGE PATH]"
            name="[INSERT NAME]"
            title="MGT. Business Operations"
            bio="[INSERT BIO TEXT - BUSINESS OPERATIONS]"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}