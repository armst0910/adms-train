import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { SelectItem, MenuItem } from 'primeng/primeng';

import { QadConstantsService } from '../../constants';
import { ThaiCalendarService } from '../../../shared/services/thai-calendar/thai-calendar.service';
import { StateService } from '../../../shared/services/state/state.service';

interface SearchCondition {
    projType?: number;
    projCode?: string;
    projName?: string;
    projSiteCode?: string;
    projSiteName?: string;
    projManager?: string;
    projSeniorManager?: string;
    projQAManager?: string;
    projCreateByQA?: string;
    projCreateDate?: Date;
    projExternalQA?: string;
}

@Component({
    selector: 'app-qad2q010',
    templateUrl: './qad2q010.component.html',
    styleUrls: ['./qad2q010.component.css'],
    providers: [QadConstantsService, ThaiCalendarService]
})
export class Qad2q010Component implements OnInit {
    private menus: SelectItem[];
    private selectedMenu: string;
    private searchCondition: SearchCondition = {};
    private historys: any[] = [];

    constructor(private http: Http,
        private router: Router,
        private locale: ThaiCalendarService,
        private qadConstant: QadConstantsService,
        private state: StateService) {
            this.menus = [];
            this.menus.push({label: 'History', value: '/qad/Qad2q010'});
            this.menus.push({label: 'CMMI Document', value: '/qad/Qad2i010'});
        }

    ngOnInit() {
        this.selectedMenu = this.router.url;
        this.searchCondition.projType = 1;
    }

    nav() {
        this.router.navigate([this.selectedMenu]);
    }

    private displaySearchProject: boolean = false;
    private isSelectedProject: boolean = false;
    private projects: any[] = [];
    private selectProject: any;
    private selectProjects: any[] = [];
    showDialogSearchProject() {
        this.searchProject();
        this.displaySearchProject = true;
    }

    searchProject() {
        this.selectProjects = [];
        if (this.isSelectedSite) {
            this.isSelectedProject = false;
            this.searchCondition.projCode = '';
            this.searchCondition.projName = '';
            this.selectProject = null;
            let site = this.searchCondition.projSiteCode;
            this.http.get('app/qad/resources/data/projectsMockData.json')
                .map(res => res.json().data)
                .subscribe((projs) => {
                    let projects = projs.filter((proj) => proj.projSiteCode === site);
                    this.projects = projects.map((proj) => {
                        return { label: proj.projCode, value: proj };
                    })
                    this.projects.unshift({ label: 'เลือกรหัสโครงการ', value: null });
                });
        } else {
            this.http.get('app/qad/resources/data/projectsMockData.json')
                .map(res => res.json().data)
                .subscribe((projs) => {
                    this.projects = projs.map((proj) => {
                        return { label: proj.projCode, value: proj };
                    });
                    this.projects.unshift({ label: 'เลือกรหัสโครงการ', value: null });
                });
        }
    }

    onChangeSelectProject() {
        this.selectProjects = [];
        if (this.selectProject !== undefined && this.selectProject !== null) {
            this.selectProjects.push(this.selectProject);
        }
    }

    okSelectProject() {
        if (this.selectProject !== undefined && this.selectProject !== null) {
            this.searchCondition.projCode = this.selectProject.projCode;
            this.searchCondition.projName = this.selectProject.projName;
            this.isSelectedProject = true;
            if (!this.isSelectedSite) {
                let projSiteCode = this.selectProject.projSiteCode;
                this.http.get('app/qad/resources/data/sitesMockData.json')
                    .map(res => res.json().data)
                    .subscribe((sites) => {
                        this.selectSites = sites.filter((site) => site.siteCode === projSiteCode);
                        if (this.selectSites.length === 1) {
                            this.selectSite = this.selectSites[0];
                            this.searchCondition.projSiteCode = this.selectSites[0].siteCode;
                            this.searchCondition.projSiteName = this.selectSites[0].siteName;
                            this.isSelectedSite = true;
                        }
                    });
            }

            this.displaySearchProject = false;
        }
    }

    cancelSelectProject() {
        this.displaySearchProject = false;
    }

    onChangeTextProject() {
        this.isSelectedProject = false;
        this.searchCondition.projName = '';
        this.selectProject = null;
        this.selectProjects = [];
    }

    private displaySearchSite: boolean = false;
    private isSelectedSite: boolean = false;
    private sites: any[] = [];
    private selectSite: any;
    private selectSites: any[] = [];

    showDialogSearchSite() {
        this.searchSite();
        this.displaySearchSite = true;
    }

    searchSite() {
        this.http.get('app/qad/resources/data/sitesMockData.json')
            .map(res => res.json().data)
            .subscribe((sites) => {
                this.sites = sites.map((site) => {
                    return { label: site.siteCode, value: site };
                });
                this.sites.unshift({ label: 'เลือกรหัสหน่วยงาน', value: null });
            });
    }

    onChangeSelectSite() {
        this.selectSites = [];
        if (this.selectSite !== undefined && this.selectSite !== null) {
            this.selectSites.push(this.selectSite);
        }
    }

    okSelectSite() {
        if (this.selectSite !== undefined && this.selectSite !== null) {
            this.searchCondition.projSiteCode = this.selectSite.siteCode;
            this.searchCondition.projSiteName = this.selectSite.siteCode;
            this.isSelectedSite = true;
            this.showDialogSearchProject();
            this.displaySearchSite = false;
        }
    }

    cancelSelectSite() {
        this.displaySearchSite = false;
    }

    onChangeTextSite() {
        this.isSelectedSite = false;
        this.searchCondition.projSiteName = '';
        this.selectSite = null;
        this.selectSites = [];
    }

    private findHeaderName: string;
    private optionSearchEmp: number;
    private displaySearchEmp: boolean = false;
    private emps: any[] = [];
    private selectEmp: any;
    private selectEmps: any[] = [];
    showDialogSearchEmp(option: number) {
        this.optionSearchEmp = option;
        let inCaseDefault: boolean = false;
        switch (this.optionSearchEmp) {
            case 1:
                //Project Manager
                this.findHeaderName = 'Project Manager';
                break;
            case 2:
                //Senior Manager
                this.findHeaderName = 'Senior Manager';
                break;
            case 3:
                //QA Manager
                this.findHeaderName = 'QA Manager';
                break;
            case 4:
                //Create By (QA)
                this.findHeaderName = 'Create By (QA)';
                break;
            case 5:
            case 6:
                //QA ผู้รับผิดชอบ
                this.findHeaderName = 'QA ผู้รับผิดชอบ';
                break;
            default:
                inCaseDefault = true;
        }

        if (!inCaseDefault) {
            this.searchEmp();
        }

        this.displaySearchEmp = (inCaseDefault) ? false : true;
    }

    searchEmp() {
        this.selectEmps = [];
        let emps;
        switch (this.optionSearchEmp) {
            case 1:
                emps = [
                    { thainame: "กมลศักดิ์ อิทธิฤกษ์มงคล", engname: "KAMONSAK ITTIRUEGMONGKON" },
                    { thainame: "กำพล หาญนฤชัย", engname: "KAMPON HANNARUECHAI" },
                    { thainame: "เกศมณี คุ้มสาธิต", engname: "KATEMANEE KHOOMSATHIT" },
                    { thainame: "เกียรติชัย สิวลีธนโชค", engname: "KIATICHAI SIWALEETHANACHOK" },
                    { thainame: "จารุมาศ ตีระสหกุล", engname: "CHARUMAS TEERASAHAKUL" },
                    { thainame: "จำนงค์ ขจรเดชะ", engname: "CHAMNONG KHACHONDACHA" },
                    { thainame: "ชนิดา เลาหพิสิฐพาณิชย์", engname: "CHANIDA LAOHAPISITPANICH" },
                    { thainame: "ชินวุธ มณีสาคร", engname: "CHINWUT MANEESACORN" },
                    { thainame: "ชูศักดิ์ ปรมานุรักษ์", engname: "CHUSAK PARAMANURAK" },
                    { thainame: "เดชา ศุกระแพทย์", engname: "DACHA SUKRAPHATTYA" },
                    { thainame: "ทศพร พุทธศุภะ", engname: "THODSAPORN PHUTTASUPA" },
                    { thainame: "ธนา เกษะประกร", engname: "THANA KASAPRAGORN" },
                    { thainame: "ธีรยุทธ์ ฟุ้งเกียรติไพบูลย์", engname: "TEERAYUT FUNGKIATPAIBOOL" },
                    { thainame: "ปภินวิช วสุภัทรภิญโญ", engname: "PAPHINWICH VASUPHATRAPHINYO" },
                    { thainame: "ประไพลักษณ์ วรยศโกวิท", engname: "PRAPAILUK WORRAYOTKOVIT" },
                    { thainame: "พงษ์ศักดิ์ จิรโพธิ์ทอง", engname: "PONGSAK JIRAPHOTHONG" },
                    { thainame: "ไพศาล โชคพิพัฒน์ทวี", engname: "PAISAN CHOKPIPATTAWEE" },
                    { thainame: "มนชิดา โชติเสน", engname: "MONCHIDA CHOTISEN" },
                    { thainame: "วรเมธ วัชระบัณฑูรย์", engname: "WORAMET WATCHARABUNTOON" },
                    { thainame: "วิจิตร ธเนศานุรักษ์", engname: "WIJIT THANESANURAK" },
                    { thainame: "ศราวุฒ ศิริอุดม", engname: "SARAWUT SIRIUDOM" },
                    { thainame: "สมพร นาควงษ์", engname: "SOMPORN NAKWONG" },
                    { thainame: "สมศักดิ์ ชาญชัยรุจิรา", engname: "SOMSAK CHANCHAIRUJIRA" },
                    { thainame: "สุรชัย สถาพรวัฒนายนต์", engname: "SURACHAI SATHAPORNWATTANAYONT" },
                    { thainame: "สุรพล เรืองรอง", engname: "SURAPOL RUENGRONG" },
                    { thainame: "สุรินทร์ อึงนิยม", engname: "SURIN OUNGNIYOM" },
                    { thainame: "สุวรรณ อินยิน", engname: "SUWAN INYIN" },
                    { thainame: "อนุชา โชติวัฒนดิลก", engname: "ANUCHA CHOTWATTANADILOK" },
                    { thainame: "อัมรินทร์ สังขรัตน์", engname: "AMARIN SANGKARAT" },
                    { thainame: "อัศวิน อินทร์แนม", engname: "ADSAWIN INNAEM" }
                ];
                this.emps = emps.map((emp) => {
                    return { label: emp.thainame, value: emp };
                });
                this.emps.unshift({ label: 'เลือกชื่อ', value: null });
                break;
            case 2:
                //Senior Manager
                emps = [
                    { thainame: "นางพัชรวรรณ ทันอินทรอาจ", engname: "PATCHARAWAN TANINTARAARJ" },
                    { thainame: "นางวันเพ็ญ กาญจนประพิณ", engname: "WANPEN KANCHANAPRAPIN" },
                    { thainame: "นายกฤษฎา รักษ์งาน", engname: "KRISADA RUKNGAN" }
                ];
                this.emps = emps.map((emp) => {
                    return { label: emp.thainame, value: emp };
                });
                this.emps.unshift({ label: 'เลือกชื่อ', value: null });
                break;
            case 3:
                //QA Manager
                emps = [
                    { thainame: "ประไพลักษณ์ วรยศโกวิท", engname: "PRAPAILUK WORRAYOTKOVIT" }
                ];
                this.emps = emps.map((emp) => {
                    return { label: emp.thainame, value: emp };
                });
                this.emps.unshift({ label: 'เลือกชื่อ', value: null });
                break;
            case 4:
                //Create By (QA)
                emps = [
                    { thainame: "ณัฐรี เตชะทวีกุล", engname: "NATTAREE TECHATAWEEKUL" },
                    { thainame: "ศิริรุ้ง รัศมีวงศ์พร", engname: "SIRIROONG RUSSAMEEWONGPORN" }
                ];
                this.emps = emps.map((emp) => {
                    return { label: emp.thainame, value: emp };
                });
                this.emps.unshift({ label: 'เลือกชื่อ', value: null });
                break;
            case 5:
            case 6:
                //QA ผู้รับผิดชอบ
                emps = [
                    { thainame: "ณัฐรี เตชะทวีกุล", engname: "NATTAREE TECHATAWEEKUL" },
                    { thainame: "ศิริรุ้ง รัศมีวงศ์พร", engname: "SIRIROONG RUSSAMEEWONGPORN" }
                ];
                this.emps = emps.map((emp) => {
                    return { label: emp.thainame, value: emp };
                });
                this.emps.unshift({ label: 'เลือกชื่อ', value: null });
                break;
            default:
        }
    }

    onChangeSelectEmp() {
        this.selectEmps = [];
        if (this.selectEmp !== undefined && this.selectEmp !== null) {
            this.selectEmps.push(this.selectEmp);
        }
    }

    okSelectEmp() {
        if (this.selectEmp !== undefined && this.selectEmp !== null) {
            switch (this.optionSearchEmp) {
                case 1:
                    //Project Manager
                    this.searchCondition.projManager = this.selectEmp.thainame;
                    break;
                case 2:
                    //Senior Manager
                    this.searchCondition.projSeniorManager = this.selectEmp.thainame;
                    break;
                case 3:
                    //QA Manager
                    this.searchCondition.projQAManager = this.selectEmp.thainame;
                    break;
                case 4:
                    //Create By (QA)
                    this.searchCondition.projCreateByQA = this.selectEmp.thainame;
                    break;
                // case 5:
                //     //QA ผู้รับผิดชอบ
                //     this.projResponsibleQaName = this.selectEmp.thainame;
                //     break;
                // case 6:
                //     //QA ผู้รับผิดชอบ ในช่องตัวเลือกการค้นหา
                //     this.searchAdditionCondition.projResponsibleQaName = this.selectEmp.thainame;
                //     break;
                default:
            }

            this.displaySearchEmp = false;
        }
    }

    cancelSelectEmp() {
        this.displaySearchEmp = false;
    }

    search() {
        this.http.get('app/qad/resources/data/historyDocumentCMMIsMockData.json')
        .map(res => res.json().data)
        .subscribe((historys: any[]) => {
            this.historys = historys.filter((history) => history.projCode === this.searchCondition.projCode);
            for (let i = 0; i < this.historys.length; i++) {
                    let date = new Date(this.historys[i].date);
                    this.historys[i].showDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                }
        });
    }

    private selectedHistory: any;
    onRowSelectHistory(event) {
        this.state.projCode = event.data.projCode;
        this.state.mode = 'EDIT';
        this.router.navigate(['qad/QAD2I010']);
    }
}
