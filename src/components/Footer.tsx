export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-dark-900 border-t border-dark-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Automation Systems</h3>
            <p className="text-dark-400">
              Building practical AI automations that help teams work smarter.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-dark-400">
              <li>
                <a href="#" className="hover:text-accent-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-blue transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-blue transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-dark-400">
              <li>
                <a href="#" className="hover:text-accent-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8">
          <p className="text-center text-dark-500 text-sm">
            © {new Date().getFullYear()} Automation Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
