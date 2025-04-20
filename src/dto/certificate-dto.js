class CertificateDto {
    constructor(
        id, 
        certificateName,
        description, 
        validityPeriod,
        certificateLevel
    ){
        this.id = id;
        this.certificateName = certificateName;
        this.description = description;
        this.validityPeriod = validityPeriod;
        this.certificateLevel = certificateLevel;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            certificateName: this.certificateName,
            description: this.description,
            validityPeriod: this.validityPeriod,
            certificateLevel: this.certificateLevel
        };
    }

    static fromCertificateResponse(data) {
        return new CertificateDto(
          data.id,
          data.certificateName,
          data.certificateLevel,
          data.description,
          data.validityPeriod,
        );
    }
}

export default CertificateDto;
