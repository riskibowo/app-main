import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { properties } from '../data/properties';
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle2,
  Home as HomeIcon
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Properti tidak ditemukan</h2>
          <Button onClick={() => navigate('/')}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Daftar
          </Button>
        </div>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src={property.gambar}
              alt={property.nama}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            
            {/* Price Badge */}
            <div className="absolute bottom-6 left-6">
              <div className="bg-card/95 backdrop-blur-sm px-6 py-3 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Harga</p>
                <p className="text-3xl font-bold text-primary">{property.harga}</p>
              </div>
            </div>

            {property.featured && (
              <Badge className="absolute top-6 right-6 bg-accent text-accent-foreground border-0 text-base px-4 py-2">
                Properti Unggulan
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Location */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {property.nama}
                </h1>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-lg">{property.lokasi}</span>
                </div>
              </div>

              {/* Specs Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Bed className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {property.kamarTidur}
                    </p>
                    <p className="text-sm text-muted-foreground">Kamar Tidur</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Bath className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {property.kamarMandi}
                    </p>
                    <p className="text-sm text-muted-foreground">Kamar Mandi</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Maximize className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {property.luas}
                    </p>
                    <p className="text-sm text-muted-foreground">Luas Tanah</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <HomeIcon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {property.kamarTidur}
                    </p>
                    <p className="text-sm text-muted-foreground">Lantai</p>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Deskripsi</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {property.deskripsi}
                </p>
              </div>

              <Separator />

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Fasilitas & Keunggulan</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {property.fitur.map((fitur, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{fitur}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Tertarik dengan properti ini?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Hubungi kami untuk informasi lebih lanjut atau jadwalkan kunjungan
                    </p>

                    <div className="space-y-3">
                      <Link to="/kontak" className="block">
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90">
                          <Mail className="w-5 h-5 mr-2" />
                          Kirim Pesan
                        </Button>
                      </Link>

                      <a href="tel:+6281234567890">
                        <Button variant="outline" className="w-full h-12">
                          <Phone className="w-5 h-5 mr-2" />
                          Hubungi Kami
                        </Button>
                      </a>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        <span>+62 812-3456-7890</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        <span>info@katalogperumahan.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Info Card */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">Informasi Penting</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>Sertifikat Hak Milik (SHM)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>Siap Huni</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>KPR & Cash Tersedia</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>Akses Jalan Lebar</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Properti Serupa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties
                .filter(p => p.id !== property.id && p.lokasi === property.lokasi)
                .slice(0, 3)
                .map(p => (
                  <Link key={p.id} to={`/detail/${p.id}`}>
                    <Card className="property-card overflow-hidden h-full">
                      <img
                        src={p.gambar}
                        alt={p.nama}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{p.nama}</h3>
                        <p className="text-primary font-bold mb-2">{p.harga}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{p.lokasi}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}