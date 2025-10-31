import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { PropertyCard } from '../components/PropertyCard';
import { Footer } from '../components/Footer';
import { properties } from '../data/properties';
import { Search, MapPin, Home as HomeIcon, TrendingUp } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('semua');
  const [sortBy, setSortBy] = useState('featured');

  // Get unique locations
  const locations = useMemo(() => {
    const locs = [...new Set(properties.map(p => p.lokasi))];
    return ['semua', ...locs];
  }, []);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = properties.filter(property => {
      const matchesSearch = property.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           property.lokasi.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = locationFilter === 'semua' || property.lokasi === locationFilter;
      return matchesSearch && matchesLocation;
    });

    // Sort
    if (sortBy === 'featured') {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.harga.replace(/\D/g, ''));
        const priceB = parseInt(b.harga.replace(/\D/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.harga.replace(/\D/g, ''));
        const priceB = parseInt(b.harga.replace(/\D/g, ''));
        return priceB - priceA;
      });
    }

    return filtered;
  }, [searchQuery, locationFilter, sortBy]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Properti Terbaik 2024</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Temukan Rumah <br />
                <span className="text-primary">Impian Anda</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Jelajahi berbagai pilihan rumah dengan harga dan lokasi terbaik. Mulai perjalanan Anda menuju hunian sempurna bersama kami.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Properti Tersedia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Keluarga Bahagia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Area Lokasi</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Hero House"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HomeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari berdasarkan nama atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Location Filter */}
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <SelectValue placeholder="Lokasi" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(loc => (
                  <SelectItem key={loc} value={loc}>
                    {loc === 'semua' ? 'Semua Lokasi' : loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Unggulan</SelectItem>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Properti Pilihan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Koleksi rumah terbaik dengan berbagai tipe dan lokasi strategis
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Tidak ada properti ditemukan
              </h3>
              <p className="text-muted-foreground">
                Coba ubah filter pencarian Anda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Siap Menemukan Rumah Impian Anda?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk informasi lebih lanjut dan jadwalkan kunjungan properti
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-lg">
            Hubungi Kami Sekarang
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}