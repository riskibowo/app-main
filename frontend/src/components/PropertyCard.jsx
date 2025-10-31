import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const PropertyCard = ({ property }) => {
  return (
    <Card className="property-card overflow-hidden border-border h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden image-overlay">
        <img
          src={property.gambar}
          alt={property.nama}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        {property.featured && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0">
            Unggulan
          </Badge>
        )}
        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-white text-2xl font-bold drop-shadow-lg">
            {property.harga}
          </p>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-1">
          {property.nama}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1 text-primary" />
          <span className="text-sm">{property.lokasi}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1 text-primary" />
            <span>{property.kamarTidur} KT</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1 text-primary" />
            <span>{property.kamarMandi} KM</span>
          </div>
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-1 text-primary" />
            <span>{property.luas}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-6 pt-0 mt-auto">
        <Link to={`/detail/${property.id}`} className="w-full">
          <Button className="w-full group bg-primary hover:bg-primary/90">
            Lihat Detail
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};