import {
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuApi } from '../../api/cdgs-authorize-services/api/api';
import { AdmsMenuService } from '../../services/adms-menu/adms-menu.service';
import {
    FwMenuBean,
    FwIconBean,
    FwProgramBean,
    FwSystemBean,
    FwActiveRoleBean,
    FwNodeBean,
    FwPermissionBean,
    FwProgramCategoryBean,
    FwProgramTypeBean,
    FwRoleBean,
    FwSubSystemBean
} from '../../api/cdgs-authorize-services/model/models';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css'],
    animations: [
        trigger('contentWidth', [
            state('expanded', style({ marginRight: '300px' })),
            state('collapsed', style({ marginRight: '0px' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ])
    ]
})
export class TemplateComponent implements OnInit {
    private expanded = false;
    private drawerState = 'collapsed';
    private drawerType: string;
    private programMenu: FwNodeBean[];
    private navLink: Array<{ name: string, uri: string }>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private admsMenuService: AdmsMenuService
    ) {

    }

    ngOnInit() {
        if (sessionStorage.getItem('menuList')) {
            this.navLink = this.admsMenuService.getNavLink();
        } else {
            console.log('getmenu');
            this.admsMenuService.getMenuByActiveRole().subscribe((response: FwMenuBean[]) => {
                console.log(response[0].nodes);
                sessionStorage.setItem('menuList', JSON.stringify(response[0].nodes));
                this.navLink = this.admsMenuService.getNavLink();
            });
        }
    }

    toggleDrawer(type: string) {
        this.drawerType = type;
        this.drawerState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    }

    logout(event) {
        event.preventDefault();
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }

}
