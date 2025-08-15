export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary-foreground text-primary p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="font-bold">QH</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold">Qingdao HiFortune</h3>
                <p className="text-sm opacity-80">Rubber Machinery & Mould</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Professional supplier of tire and inner tube machinery, 
              as well as a manufacturer of various tire and inner tube moulds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Tire Building Machines</li>
              <li className="opacity-80">Tire Curing Presses</li>
              <li className="opacity-80">Inner Tube Extruders</li>
              <li className="opacity-80">Inner Tube Curing Chambers</li>
              <li className="opacity-80">Custom Moulds</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Qingdao HiFortune Rubber Machinery & Mould Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}