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
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="font-serif text-xl mb-4">Also available from:</h3>
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm hover:text-gray-600 transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
