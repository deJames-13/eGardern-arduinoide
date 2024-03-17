#ifndef SOIL_MOISTURE_H
#define SOIL_MOISTURE_H

#include "pinconfig.h"

class SoilMoisture
{
public:
    SoilMoisture();
    void begin();
    int getMoisture();
};

#endif
