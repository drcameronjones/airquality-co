import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">AirQuality.co</h3>
            <p className="text-gray-400">
              AI-powered respiratory risk forecasting combining air quality data,
              weather patterns, and social media trends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/research">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Research
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Get Involved
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Dr Cameron Jones
              <br />
              <a
                href="mailto:cameron@drcameronjones.com"
                className="hover:text-white transition-colors"
              >
                cameron@drcameronjones.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} AirQuality.co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

