#ifndef SOIL_MOISTURE_H
#define SOIL_MOISTURE_H

class SoilMoisture
{
public:
    SoilMoisture(int pin);
    void begin();
    int getMoisture();
    bool isTooDry();
    bool isTooWet();

private:
    int pin;
    int moisture;
};

#endif
