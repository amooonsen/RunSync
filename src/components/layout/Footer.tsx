import MotionFooterContent from "./MotionFooterContent";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <footer id="footer" className="relative z-50">
      <div className="h-[300px] bg-black overflow-hidden">
        <MotionFooterContent>
          <FooterContent />
        </MotionFooterContent>
      </div>
    </footer>
  );
}
