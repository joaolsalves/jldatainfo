import Link from "next/link";

interface FooterProps {
  copyright: string;
  privacy: string;
  privacyLink: string;
}

export default function Footer({ copyright, privacy, privacyLink }: FooterProps) {
  return (
    <footer>
      <div className="container footer-inner">
        <p>{copyright}</p>
        <p>
          <Link href={privacyLink} style={{ color: "var(--muted)", textDecoration: "underline" }}>
            {privacy}
          </Link>
        </p>
      </div>
    </footer>
  );
}
