import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Pesan berhasil dikirim!', {
        description: 'Kami akan menghubungi Anda segera.'
      });
      setFormData({ nama: '', email: '', telepon: '', pesan: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Punya pertanyaan atau ingin menjadwalkan kunjungan properti? Kami siap membantu Anda menemukan rumah impian.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Alamat Kantor</h3>
                  <p className="text-muted-foreground text-sm">
                    Jl. Properti Raya No. 123<br />
                    Jakarta Selatan, DKI Jakarta<br />
                    Indonesia 12345
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Telepon</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    +62 812-3456-7890
                  </p>
                  <p className="text-muted-foreground text-sm">
                    +62 21-1234-5678
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    info@katalogperumahan.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    support@katalogperumahan.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 08:00 - 14:00</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Kirim Pesan
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nama">Nama Lengkap *</Label>
                        <Input
                          id="nama"
                          name="nama"
                          type="text"
                          placeholder="Masukkan nama Anda"
                          value={formData.nama}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telepon">Nomor Telepon *</Label>
                      <Input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        placeholder="+62 812-3456-7890"
                        value={formData.telepon}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pesan">Pesan *</Label>
                      <Textarea
                        id="pesan"
                        name="pesan"
                        placeholder="Tulis pesan Anda di sini..."
                        value={formData.pesan}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      {isSubmitting ? (
                        'Mengirim...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Dengan mengirim pesan, Anda menyetujui kebijakan privasi kami
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card className="mt-8">
                <CardContent className="p-0">
                  <div className="w-full h-[300px] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-muted-foreground">Peta Lokasi Kantor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Butuh Bantuan Segera?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tim kami siap membantu Anda menemukan properti yang sempurna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+6281234567890">
              <Button size="lg" className="bg-accent hover:bg-accent/90 h-12 px-8">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Sekarang
              </Button>
            </a>
            <a href="mailto:info@katalogperumahan.com">
              <Button size="lg" variant="outline" className="h-12 px-8">
                <Mail className="w-5 h-5 mr-2" />
                Kirim Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}