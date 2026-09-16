import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Department = {
  id: number;
  name: string;
  description: string;
};

type LinkCard = {
  department: number;
  title: string;
  image: string;
  imageAlt: string;
  url: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyIkeaRoadMap');
  selectedDepartment: Department | null = null;
  departments: Department[] = [
    {
      id: 2,
      name: 'Dnevna soba',
      description: 'Prvi kat.'
    },
    {
      id: 5,
      name: 'Kuhinja',
      description: 'Prvi kat.'
    },
    {
      id: 7,
      name: 'Spavaća soba',
      description: 'Prvi kat.'
    },
    {
      id: 13,
      name: 'Tekstil',
      description: 'Prizemlje.'
    },
    {
      id: 15,
      name: 'Kupaonica',
      description: 'Prizemlje.'
    },
    {
      id: 16,
      name: 'Organizacija doma',
      description: 'Prizemlje.'
    },
    {
      id: 17,
      name: 'Rasvjeta',
      description: 'Prizemlje.'
    },
    {
      id: 21,
      name: 'Sampoposluživanje',
      description: 'Prizemlje.'
    }
  ];

  linkCards: LinkCard[] = [
    {
      department: 7,
      title: 'Krevet Malm',
      image: 'assets/section_7_MALM.png',
      imageAlt: 'Krevet Malm',
      url: 'https://www.ikea.com/hr/hr/p/malm-otoman-krevet-crno-smeda-80404808/#content'
    },
    {
      department: 7,
      title: 'Krevet Idanas 180x200',
      image: 'assets/section_7_IDANAS.png',
      imageAlt: 'Krevet Idanas Italia',
      url: 'https://www.ikea.com/hr/hr/p/idanaes-ojastuceni-otoman-gunnared-tamno-siva-10458970/'
    },
    {
      department: 2,
      title: 'SALTSJÖBADEN Dvosjed na razvlačenje',
      image: 'assets/Dvosjed_saltsjobaden.png',
      imageAlt: 'Dvosjed SALTSJÖBADEN',
      url: 'https://www.ikea.com/hr/hr/p/saltsjoebaden-dvosjed-na-razvlacenje-blekinge-bijela-s59578589/#content'
    },
    {
      department: 5,
      title: 'SENSUELL Tava',
      image: 'assets/tava_SENSUELL.png',
      imageAlt: 'SENSUELL',
      url: 'https://www.ikea.com/hr/hr/p/sensuell-tava-nehrdajuci-celik-siva-60324544/'
    },
    {
      department: 5,
      title: 'VARIERA Podloga za ladicu',
      image: 'assets/VARIERA_podloga.png',
      imageAlt: 'VARIERA',
      url: 'https://www.ikea.com/hr/hr/p/variera-podloga-za-ladicu-transparentna-80012853/'
    },
    {
      department: 7,
      title: 'EKET ormarić 35x25x35',
      image: 'assets/EKET_nocni_ormaric.png',
      imageAlt: 'EKET',
      url: 'https://www.ikea.com/hr/hr/p/eket-element-tamno-siva-40334558/'
    },
    {
      department: 7,
      title: 'STOMSÖ ormarić 36x29x20',
      image: 'assets/STOMSO_nocni_ormaric.png',
      imageAlt: 'STOMSÖ',
      url: 'https://www.ikea.com/hr/hr/p/stomsoe-nocni-ormaric-montiran-na-zid-efekt-breze-bijela-plava-70567805/'
    },
    {
      department: 13,
      title: 'VIDGA karniša',
      image: 'assets/VIDGA_karnisa.png',
      imageAlt: 'VIDGA',
      url: 'https://www.ikea.com/hr/hr/p/vidga-staza-za-strop-zavrsetak-bijela-s59428260/'
    },
    {
      department: 15,
      title: 'LETTAN element s ogledalom i vratima',
      image: 'assets/LETTAN_kupaonski_ormaric.png',
      imageAlt: 'LETTAN',
      url: 'https://www.ikea.com/hr/hr/p/lettan-element-s-ogledalom-i-vratima-zrcalni-efekt-zrcalno-staklo-00534922/'
    },
    {
      department: 15,
      title: 'FAXÄLVEN element s ogledalom i ugrađenom rasvjetom',
      image: 'assets/Faxvalen.png',
      imageAlt: 'FAXÄLVEN',
      url: 'https://www.ikea.com/hr/hr/p/faxaelven-element-s-ogl-i-ugradenom-rasvjetom-efekt-hrasta-s09516711/'
    },
    {
      department: 15,
      title: 'BACKMÅRA kupaonski tepih',
      image: 'assets/BACKMaRA.png',
      imageAlt: 'BACKMÅRA',
      url: 'https://www.ikea.com/hr/hr/p/backmara-kupaonski-tepih-tamno-siva-plava-30605588/#content'
    },
    {
      department: 16,
      title: 'DAMMÄNG kanta',
      image: 'assets/DAMMaNG.png',
      imageAlt: 'DAMMÄNG',
      url: 'https://www.ikea.com/hr/hr/p/dammaeng-kanta-poklopac-sivo-zelena-00559979/#content'
    },
    {
      department: 16,
      title: 'DIMPA kanta',
      image: 'assets/dimpa.png',
      imageAlt: 'DIMPA',
      url: 'https://www.ikea.com/hr/hr/p/dimpa-vreca-za-sortiranje-s-poklopcem-svijetlo-siva-bez-40601434/'
    },
    {
      department: 17,
      title: 'NYMÅNE Podna lampa',
      image: 'assets/nymane_podna_lampa.png',
      imageAlt: 'NYMÅNE',
      url: 'https://www.ikea.com/hr/hr/p/nymane-podna-lampa-3-reflektora-antracit-80477734/'
    },
    {
      department: 17,
      title: 'NYMÅNE Podna lampa',
      image: 'assets/nymane_podna_lampa_bijela.png',
      imageAlt: 'NYMÅNE',
      url: 'https://www.ikea.com/hr/hr/p/nymane-podna-lampa-za-citanje-bijela-80336758/'
    },
    {
      department: 17,
      title: 'NYMÅNE Stropna lampa',
      image: 'assets/nymane_stropni_reflektor.png',
      imageAlt: 'NYMÅNE',
      url: 'https://www.ikea.com/hr/hr/p/nymane-4-stropna-reflektora-antracit-80415086/'
    },
    {
      department: 21,
      title: 'VÄSMAN Vrtni produljivi stol',
      image: 'assets/vasman_produljivi_stol.png',
      imageAlt: 'VÄSMAN',
      url: 'https://www.ikea.com/hr/hr/p/vaesman-produljivi-stol-za-van-svijetlo-smedi-bajc-30469034/'
    },
    {
      department: 21,
      title: 'NÄMMARÖ Vrtni  stol',
      image: 'assets/nammaro_stolice.png',
      imageAlt: 'NÄMMARÖ',
      url: 'https://www.ikea.com/hr/hr/p/naemmaroe-stol-i-4-stolice-s-podes-nasl-vanj-svijetlo-smedi-bajc-s69544396/'
    }
  ]

  openDepartment(id: number): void {
    this.selectedDepartment =
      this.departments.find(department => department.id === id) ?? null;
  }

  closeDetails(): void {
    this.selectedDepartment = null;
  }

  get selectedLinkCards(): LinkCard[]{
    if (!this.selectedDepartment)
      return [];

    return this.linkCards.filter(
      card => card.department == this.selectedDepartment?.id
    );
  }
}
