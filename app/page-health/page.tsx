import Layout from "@/components/layout/Layout";
import LoginContent from "./HealthContent";

export const metadata = {
  title: "Health Care | My Yoga Network",
  description:
    "Explore My Yoga Network's specialized yoga and wellness programs designed to support healthcare professionals, patients, and organizations in promoting holistic health.",
};

export default function PageLogin() {
  return (
    <Layout>
      <LoginContent />
    </Layout>
  );
}
