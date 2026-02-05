import { Book } from "@/lib/content";

interface DistributionLinksProps {
  book: Book;
}

export default function DistributionLinks({ book }: DistributionLinksProps) {
  const links = [];

  if (book.amazonUrl) {
    links.push({
      name: "Amazon",
      url: book.amazonUrl,
      icon: "📚",
    });
  }

  if (book.appleBooksUrl) {
    links.push({
      name: "Apple Books",
      url: book.appleBooksUrl,
      icon: "📖",
    });
  }

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="pt-8 border-t border-gray-200">
      <h3 className="font-serif text-lg md:text-xl mb-6 text-gray-600">Also available from:</h3>
      <ul className="flex flex-wrap gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors link-subtle"
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
