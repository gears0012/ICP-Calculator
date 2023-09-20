import Float "mo:base/Float";

actor Calculator {
    public func sumar(a: Int, b: Int): async Int {
        return a + b;
    };

    public func restar(a: Int, b: Int): async Int {
        return a - b;
    };

    public func multiplicar(a: Int, b: Int): async Int {
        return a * b;
    };

    public func dividir(a: Int, b: Int): async Int {
        if (b == 0) {
            return 0; // Evita la división por cero
        };
        return a / b;
    };
    public func raizCuadrada(n: Float) : async Float {
        return Float.sqrt(n);
    };

    public func potencia(base: Float, exponente: Float) : async Float {
        return Float.pow(base, exponente);
    };

    public func logaritmo(n: Float) : async Float {
        return Float.log(n);
    };

    public func seno(n: Float) : async Float {
        return Float.sin(n);
    };

    public func coseno(n: Float) : async Float {
        return Float.cos(n);
    };
    
    public func tangente(n: Float) : async Float {
        return Float.tan(n);
    };
};
